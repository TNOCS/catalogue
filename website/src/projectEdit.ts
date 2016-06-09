import {inject}                 from 'aurelia-framework';
import {Router}                 from 'aurelia-router';
import {Endpoint, Rest}         from 'aurelia-api';
import {AuthService}            from 'aurelia-authentication';
import {DialogController}       from 'aurelia-dialog';
import {DatabaseService}        from 'services/DatabaseService';
import {IUser}                  from 'models/user';
import {IDatabase}              from 'models/database';
import {ICharacteristic}        from 'models/characteristic';
import {IProject, IParticipant} from 'models/project';

// TODO Add/delete analyst
// TODO Save project to local database
// TODO Save project to remote database
// TODO Cancel edit 
// TODO add new project, 
// TODO delete project

// Nice to have
// TODO Set selected incident and ciSectors using checkboxes

@inject(Endpoint.of('api'), Endpoint.of('auth'), DatabaseService, Router)
export class ProjectEdit {
    orgProject: IProject;
    project:    IProject;
    data:       IDatabase;
    activeTask: ICharacteristic;
    activeGap:  ICharacteristic;

    tasks:      ICharacteristic[] = [];
    gaps:       ICharacteristic[] = [];
    ciSectors:  ICharacteristic[] = [];
    incidents:  ICharacteristic[] = [];

    constructor(private api: Rest, private auth: AuthService, private db: DatabaseService, private router: Router) {}

    activate(params) {
        return this.db.database.then(db => {
            this.data = db;

            let id = params.id;
            db.projects.some(p => {
                if (p.id !== id) return false;
                this.orgProject = p;
                return true;
            });

            //this.project = db.projects[+params.id];
            let p = this.orgProject;

            // CLONE the project, so we can cancel any changes.
            this.data.tasks.forEach(task => {
                let newTask: ICharacteristic = {
                    id:          task.id,
                    title:       task.title,
                    description: task.description,
                    children:    []
                };

                task.children.forEach(subTask => {
                    let newSubTask: ICharacteristic = {
                        id:          subTask.id,
                        title:       subTask.title,
                        description: subTask.description,
                        isSelected:  false
                    };
                    newSubTask.isSelected = this.containsCharacteristic(p.tasks, newSubTask.id) !== null;
                    if (subTask.relations) {
                        newSubTask.relations = [];
                        subTask.relations.forEach(gap => {
                            let newGap: ICharacteristic = {
                                id:          gap.id,
                                title:       gap.title,
                                description: gap.description,
                                isSelected:  false
                            };
                            let foundGap = this.containsCharacteristic(p.gaps, gap.id);
                            if (foundGap) {
                                newGap.isSelected = true;
                                newGap.score = {
                                    id:          foundGap.score.id,
                                    title:       foundGap.score.title,
                                    description: foundGap.score.description,
                                    rating: {
                                        value: foundGap.score.rating.value,
                                        max:   foundGap.score.rating.max
                                    }
                                };
                                newGap.remarks = foundGap.remarks;
                            }
                            newSubTask.relations.push(newGap);
                        });
                    }
                    newTask.children.push(newSubTask);
                });
                this.tasks.push(newTask);
            });
            this.data.incidents.forEach(incident => incident.children.forEach(c => this.incidents.push(c)));
            this.gaps      = this.data.gaps;
            this.ciSectors = this.data.ciSectors;

            // clone project, so we can cancel the edit
            this.project = {
                id:             p.id,
                shortTitle:     p.shortTitle,
                title:          p.title,
                maturityLevel:  this.db.maturityLevels[p.maturityLevel.id],
                usabilityLevel: this.db.usabilityLevels[p.usabilityLevel.id],
                intendedUsers:  p.intendedUsers,
                references:     [],
                currentUse:     p.currentUse,
                tagline:        p.tagline,
                description:    p.description,
                logo:           p.logo || 'img/TNO120x120.png',
                isProduct:      p.isProject,
                isProject:      p.isProject,
                tasks:          [],
                incidents:      [],
                gaps:           [],
                ciSectors:      [],
                administration: {},
                analysts:       []
            };
            if (p.references) p.references.forEach(r => this.project.references.push(r));
            this.copyCharacteristics(p.incidents, this.incidents , this.project.incidents );
            this.copyCharacteristics(p.ciSectors, this.ciSectors , this.project.ciSectors );

            if (p.administration) {
                if (p.administration.duration) {
                    this.project.administration.duration = {
                        start: p.administration.duration.start,
                        end: p.administration.duration.end,
                        status: p.administration.duration.status
                    }
                }
                this.project.administration.projectType = p.administration.projectType;
                this.project.administration.developers  = p.administration.developers;
                this.project.administration.owners      = p.administration.owners;
                this.project.administration.sponsors    = p.administration.sponsors;
                if (p.administration.coordinator) {
                    this.project.administration.coordinator = {
                        country: p.administration.coordinator.country,
                        title: p.administration.coordinator.title
                    };
                }
                if (p.administration.participants) {
                    this.project.administration.participants = [];
                    p.administration.participants.forEach(pc => {
                        this.project.administration.participants.push({
                            country: pc.country,
                            title: pc.title
                        })
                    })
                }
            }

            if (p.analysts && p.analysts.length > 0) {
                p.analysts.forEach(a => {
                    this.project.analysts.push({
                        name: a.name,
                        organisation: a.organisation,
                        reviewed: a.reviewed,
                        validationLevel: { id: a.validationLevel.id },
                        remarks: a.remarks
                    })
                });
            }

        });
    }

    /** 
     * Checks whether the array of characteristics contains the desired characteristic. 
     * If true, returns the found characteristic, otherwise returns null.
     */
    containsCharacteristic(characteristics: ICharacteristic[], id: string) {
        if (!characteristics) return null;
        let isFound: ICharacteristic = null;
        characteristics.some(c => {
            if (c.id !== id) return false;
            isFound = c;
            return true;
        });
        return isFound;
    }

    selectTask(task: ICharacteristic) {
        if (!task) return;
        this.activeTask = task;
    }

    selectGap(gap: ICharacteristic) {
        if (!gap) return;
        // gap.isSelected  = !gap.isSelected;
        this.activeGap = gap;
    }

    /** Delete an existing participant */
    deleteParticipant(p: IParticipant) {
        if (!p) return;
        let i = this.project.administration.participants.indexOf(p);
        if (i >= 0) this.project.administration.participants.splice(i, 1);
    }

    /** Add a new participant */
    addParticipant() {
        this.project.administration.participants.push(<IParticipant>{
            title: "",
            country: "Unknown"
        });
    }

    /** Delete an existing reference */
    deleteReference(i: number) {
        if (typeof i === 'undefined') return;
        // let i = this.project.references.indexOf(r);
        if (i >= 0) this.project.references.splice(i, 1);
    }
    /** Update the reference: the regular binding does not work for string arrays */
    updateReference(index: number, ev) {
        this.project.references[index] = ev.target.value;
    }
    /** Add a new reference */
    addReference() {
        this.project.references.push("");
    }

    /** Delete an existing analyst */
    deleteAnalyst(analyst) {
        if (!analyst) return;
        let i = this.project.analysts.indexOf(analyst);
        if (i >= 0) this.project.analysts.splice(i, 1);
    }
    /** Add a new analyst */
    addAnalyst() {
        let analyst = { validationLevel: this.data.validationLevels[0] };
        this.project.analysts.push(analyst);
    }

    /** Countries of the world */
    get countries() {
        const c: string[] = ["Unknown", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];;
        return c;
    }

    /** 
     * Copy characteristics from source1 (e.g. database project tasks) to the sink 
     * (e.g. local project tasks). However, since we need to reference the database, 
     * I need to copy from them.
     */
    private copyCharacteristics(src1: ICharacteristic[], src2: ICharacteristic[], sink: ICharacteristic[]) {
        if (!src1 || src1.length === 0) return;
        src1.forEach(t1 => {
            src2.some(t2 => {
                if (t1.id !== t2.id) return false;
                sink.push(t2);
                return true; 
            });
        });
    }

    /**
     * Save the current project to the database, and to the server.
     */
    save() {
        let p1 = this.orgProject;
        let p2 = this.project;

        p1.id = p2.id;
        p1.shortTitle = p2.shortTitle;
        p1.title = p2.title;
        p1.intendedUsers = p2.intendedUsers;
        p1.currentUse = p2.currentUse;
        p1.description = p2.description;
        p1.logo = p2.logo;
        p1.isProject = p2.isProject;
        p1.isProduct = p2.isProduct;
        p1.usabilityLevel = {
            id: p2.usabilityLevel.id,
            remarks: p2.usabilityLevel.remarks
        };
        p1.maturityLevel = {
            id: p2.maturityLevel.id
        };
        p1.administration = p2.administration;
        p1.analysts = p2.analysts;
        if (p1.references) p1.references.length = 0;
        else p1.references = [];         
        if (p1.tasks) p1.tasks.length = 0;
        else p1.tasks = [];
        if (p1.ciSectors) p1.ciSectors.length = 0;
        else p1.ciSectors = [];
        if (p1.gaps) p1.gaps.length = 0;
        else p1.gaps = [];
        if (p1.incidents) p1.incidents.length = 0;
        else p1.incidents = [];
        if (p2.references) p2.references.forEach(r => p1.references.push(r));
        if (p2.incidents) p2.incidents.forEach(i => p1.incidents.push({ id: i.id }));
        if (p2.ciSectors) p2.ciSectors.forEach(i => p1.ciSectors.push({ id: i.id }));
        this.tasks.forEach(task => {
            task.children.forEach(subtask => {
                if (subtask.isSelected) p1.tasks.push({
                    id: subtask.id
                });
                if (subtask.relations) {
                    subtask.relations.forEach(gap => {
                        if (gap.isSelected) p1.gaps.push({
                            id: gap.id,
                            score: {
                                id: gap.score.id,
                            },
                            remarks: gap.remarks
                        })
                    });
                }
            });
        });

        this.api.create(`/projects`, p1)
            .then(() => {
                this.db.parseData();
            })
            .catch(err => console.error('Error saving project: ' + JSON.stringify(err)));
    }

    cancel() {
        this.router.navigate('projects');
    }
}