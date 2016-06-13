import {autoinject}                 from 'aurelia-framework';
import {Rest, Config}               from 'aurelia-api';
import {IDatabase}                  from '../models/database';
import {IProject}                   from '../models/project';
import {ICharacteristic}            from '../models/characteristic';
import {ProjectFilterConfiguration} from '../models/project-filter-configuration';

@autoinject
export class DatabaseService {
    data: IDatabase = <IDatabase>{};
    api: Rest;
    projectFilterConfig: ProjectFilterConfiguration = new ProjectFilterConfiguration();

    // TODO Maybe we can simplify all these lookup tables and lump them all together.
    private tasks:            {[key: string]: ICharacteristic } = {};
    private gaps:             {[key: string]: ICharacteristic } = {};
    private incidents:        {[key: string]: ICharacteristic } = {};
    maturityLevels:   {[key: string]: ICharacteristic } = {};
    private gapLevels:        {[key: string]: ICharacteristic } = {};
    usabilityLevels:  {[key: string]: ICharacteristic } = {};
    private validationLevels: {[key: string]: ICharacteristic } = {};
    private ciSectors:        {[key: string]: ICharacteristic } = {};

    /** Cross reference between tasks|gaps etc. and project IDs */
    private crossReferences: { [key: string]: string[] } = {};

    public database: Promise<IDatabase>;

    constructor(apiConfig: Config) {
        this.api = apiConfig.getEndpoint('api');

        this.database = this.api.find('/db')
            .then(database => this.data = database);

        this.parseData();
    }

    /** When updating/saving a project, the relations are recomputed. Make sure that we begin with a clean slate. */
    private cleanProjects(characteristics: ICharacteristic[]) {
        characteristics.forEach(c => {
            c.projects = null;
            if (c.children) {
                c.children.forEach(child => child.projects = null);
            }
        });
    }

    parseData() {
        this.database.then(db => {
            this.cleanProjects(db.ciSectors);
            this.cleanProjects(db.gaps);
            this.cleanProjects(db.incidents);
            this.cleanProjects(db.tasks);

            db.maturityLevels.forEach(m   => this.maturityLevels[m.id]   = m );
            db.usabilityLevels.forEach(m  => this.usabilityLevels[m.id]  = m );
            db.validationLevels.forEach(m => this.validationLevels[m.id] = m );
            db.gapLevels.forEach(m        => this.gapLevels[m.id]        = m );
            db.ciSectors.forEach(m        => this.ciSectors[m.id]        = m );

            this.parseCharacteristics(db.tasks,     this.tasks);
            this.parseCharacteristics(db.incidents, this.incidents);
            this.parseCharacteristics(db.gaps,      this.gaps, false);
            this.parseCharacteristics(db.ciSectors, this.ciSectors, false);

            this.createReferencesBetweenTasksAndGaps(db);

            // Complete the project's tasks, gaps and incidents info, 
            db.projects.forEach(p => {
                this.updateProjectCharacteristics(p, p.tasks,     this.tasks);
                this.updateProjectCharacteristics(p, p.incidents, this.incidents);
                this.updateProjectCharacteristics(p, p.gaps,      this.gaps, this.gapLevels);
                this.updateProjectCharacteristics(p, p.ciSectors, this.ciSectors);

                if (p.maturityLevel && p.maturityLevel.id && this.maturityLevels.hasOwnProperty(p.maturityLevel.id))
                    p.maturityLevel = this.maturityLevels[p.maturityLevel.id];
                if (p.usabilityLevel && p.usabilityLevel.id && this.usabilityLevels.hasOwnProperty(p.usabilityLevel.id)) {
                    let usability = this.usabilityLevels[p.usabilityLevel.id];
                    p.usabilityLevel.title       = usability.title;
                    p.usabilityLevel.rating      = usability.rating;
                    p.usabilityLevel.description = usability.description;
                }
                if (p.analysts) {
                    p.analysts.forEach(a => {
                        if (a.validationLevel && this.validationLevels.hasOwnProperty(a.validationLevel.id))
                            a.validationLevel = this.validationLevels[a.validationLevel.id];
                    });
                }
            });
        });
    }

    /** Link tasks to gaps and vice versa */
    private createReferencesBetweenTasksAndGaps(db: IDatabase) {
        for (var taskId in db.task2gaps) {
            if (!this.tasks.hasOwnProperty(taskId)) continue;
            let task = this.tasks[taskId];
            task.relations = [];
            let gapIds = db.task2gaps[taskId];
            gapIds.forEach(gapId => {
                if (!this.gaps.hasOwnProperty(gapId)) return;
                let gap = this.gaps[gapId];
                if (!gap.relations) gap.relations = [];
                gap.relations.push(task);
                task.relations.push(gap);
            });
        }
    }

    /** Parse all characteristics and convert the array to an object map. */
    private parseCharacteristics(projectCharacteristics: ICharacteristic[], characteristics: { [key: string]: ICharacteristic}, skipParent = true) {
        // Parse all tasks and add them to the tasks object
        projectCharacteristics.forEach(t => {
            // Skip parent, only process one level of children
            if (skipParent && t.children) {
                t.children.forEach(sub => characteristics[sub.id] = sub);
            } else {
                characteristics[t.id] = t;
            }
        });
    }

    /** 
     * Update the tasks/gaps/incidents etc. characteristics of the project. 
     * Assume that the IDs are given and correct, but that the text (title/description) may have changed.
     * Also, for each match, e.g. of a task, update the tasks store so we know which projects refer to which tasks.
     */
    private updateProjectCharacteristics(
        project: IProject,
        projectCharacteristics: ICharacteristic[],
        characteristics: { [key: string]: ICharacteristic},
        scores?: { [key: string]: ICharacteristic}
        ) {
        if (!projectCharacteristics) return;
        let pruneIndexes: number[] = [];
        let index = -1;
        projectCharacteristics.forEach(c => {
            index++;
            if (!characteristics.hasOwnProperty(c.id)) {
                pruneIndexes.push(index);
                return;
            }
            let characteristic = characteristics[c.id];
            c.title = characteristic.title;
            c.description = characteristic.description;
            if (scores && c.score && c.score.id) {
                if (scores.hasOwnProperty(c.score.id)) c.score = scores[c.score.id];
            }
            // Finally, update the characteristics with a reference to this project
            if (!characteristic.projects) characteristic.projects = [];
            characteristic.projects.push(project);
        });
        // Make sure the taskIds and tasks are in sync, and are valid / exist
        for (let i = pruneIndexes.length - 1; i >= 0; i--) {
            let index = pruneIndexes[i];
            projectCharacteristics.splice(index, 1);
        }
    }
}