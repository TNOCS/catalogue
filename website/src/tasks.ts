import {autoinject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';

import {IProject} from './models/project';
import {ICharacteristic} from './models/characteristic';
import {DatabaseService} from './services/DatabaseService';

@autoinject
export class Tasks {
    heading = 'Tasks';
    tasks: ICharacteristic[];
    gaps: ICharacteristic[];

    selectedTasks: ICharacteristic[] = [];
    selectedGap: ICharacteristic;
    selectedProjects: IProject[] = [];

    constructor(private databaseService: DatabaseService) {}

    activate() {
        (<any>$('[data-toggle="tooltip"]')).tooltip();

        return this.databaseService.database.then(db => {
            this.tasks = db.tasks;
            this.gaps  = db.gaps;
            
            this.tasks.forEach(task => {
                task.children.forEach(t => {
                    if (t.isSelected) this.selectedTasks.push(t);
                });
            });
            this.gaps.some(g => {
                if (!g.isSelected) return false;
                this.selectedGap = g;
                return true;
            })
            this.updateProjects();
        });
    }
    
    /** You can select multiple tasks? */
    selectTask(task: ICharacteristic) {
        if (task.isSelected) {
            task.isSelected = false;
            let index = this.selectedTasks.indexOf(task);
            this.selectedTasks.splice(index, 1);
        } else {
            task.isSelected = true;
            this.selectedTasks.push(task);
        }
        this.updateProjects();
    }
    
    /** Only allow the user to select a asingle Gap */
    selectGap(gap: ICharacteristic) {
        this.gaps.forEach(g => g.isSelected = false);
        gap.isSelected = true;
        this.selectedGap = gap;
        this.updateProjects();
    }
    
    updateProjects() {
        this.selectedProjects = [];
        this.selectedTasks.forEach(t => {
            if (!t.projects || t.projects.length === 0) return;
            t.projects.forEach(p => {
                if (this.selectedProjects.indexOf(p) < 0) this.selectedProjects.push(p);
            });
        });
        if (this.selectedGap && this.selectedGap.projects && this.selectedGap.projects.length > 0) {
            this.selectedGap.projects.forEach(p => {
                if (this.selectedProjects.indexOf(p) < 0) this.selectedProjects.push(p);
            });
        }
    }
}
