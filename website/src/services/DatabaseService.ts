import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import {IDatabase} from "../models/database";
import {ICharacteristic} from "../models/characteristic";

@autoinject
export class DatabaseService {
    private data: IDatabase = <IDatabase>{};
    
    // TODO Maybe we can simplify all these lookup tables and lump them all together.
    private tasks:            {[key: string]: ICharacteristic } = {}; 
    private gaps:             {[key: string]: ICharacteristic } = {}; 
    private incidents:        {[key: string]: ICharacteristic } = {}; 
    private maturityLevels:   {[key: string]: ICharacteristic } = {}; 
    private usabilityLevels:  {[key: string]: ICharacteristic } = {}; 
    private validationLevels: {[key: string]: ICharacteristic } = {}; 
    private ciSectors:        {[key: string]: ICharacteristic } = {}; 

    /** Cross reference between tasks|gaps etc. and project IDs */
    private crossReferences: { [key: string]: string[] } = {};

    public database: Promise<IDatabase>;

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('data/');
        });
        
        this.database = this.http.fetch('database.json')
            .then(response => response.json())
            .then(database => this.data = database);

        this.parseData();
    }
    
    private parseData() {
        this.database.then(db => {
            db.maturityLevels.forEach(m   => this.maturityLevels[m.id]   = m );
            db.usabilityLevels.forEach(m  => this.usabilityLevels[m.id]  = m );
            db.validationLevels.forEach(m => this.validationLevels[m.id] = m );
            db.ciSectors.forEach(m        => this.ciSectors[m.id]        = m );
            
            this.parseCharacteristics(db.tasks,     this.tasks);
            this.parseCharacteristics(db.incidents, this.incidents);
            this.parseCharacteristics(db.gaps,      this.gaps, false);
            this.parseCharacteristics(db.ciSectors, this.ciSectors, false);
            
            this.createReferencesBetweenTasksAndGaps(db);
            
            // Add an index to each project, and complete the project's tasks, gaps and incidents info, 
            let index = 0;
            db.projects.forEach(p => {
                p.index = index++;
                this.updateProjectCharacteristics(p.tasks,     this.tasks);
                this.updateProjectCharacteristics(p.incidents, this.incidents);
                this.updateProjectCharacteristics(p.gaps,      this.gaps);
                this.updateProjectCharacteristics(p.ciSectors, this.ciSectors);
            });
        });
    }

    /** Link tasks to gaps and vice versa */
    private createReferencesBetweenTasksAndGaps(db: IDatabase) {
        for (var taskId in db.task2gaps) {
            if (!this.tasks.hasOwnProperty(taskId)) return;
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
     * Also, for each match, e.g. of a task, update the tasks store so we know that which projects refer to which tasks.
     */    
    private updateProjectCharacteristics(projectCharacteristics: ICharacteristic[], characteristics: { [key: string]: ICharacteristic}) {
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
        });
        // Make sure the taskIds and tasks are in sync, and are valid / exist
        for (let i = pruneIndexes.length - 1; i >= 0; i--) {
            let index = pruneIndexes[i];
            projectCharacteristics.splice(index, 1);
        }
    }
}