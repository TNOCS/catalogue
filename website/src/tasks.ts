import {autoinject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';

import {IProject} from './models/project';
import {ICharacteristic} from './models/characteristic';
import {DatabaseService} from './services/DatabaseService';

@autoinject
export class Tasks {
    heading = 'Tasks & Gaps';
    tasks: ICharacteristic[];
    gaps: ICharacteristic[];

    showGap = false;
    selectedTask: ICharacteristic;
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
                    if (t.isSelected) this.selectedTask.push(t);
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
    
    removeAllSelections() {
        this.gaps.forEach(g  => g.isSelected = false);
        this.tasks.forEach(t => {
             t.isSelected = false;
             t.children.forEach(task => task.isSelected = false);
        });
    }

    /** You can select multiple tasks? */
    selectTask(task: ICharacteristic) {
        if (!task.projects || task.projects.length === 0) return;
        let isSelected = !task.isSelected;
        this.showGap = !isSelected;
        this.removeAllSelections();
        if (isSelected) {
            task.isSelected = true;
            this.selectedTask = task;
        } else {
            this.selectedTask = null;
        }
        this.selectedGap = null;
        this.updateProjects();
    }
    
    /** Only allow the user to select a asingle Gap */
    selectGap(gap: ICharacteristic) {
        if (!gap.projects || gap.projects.length === 0) return;
        let isSelected = !gap.isSelected;
        this.showGap = isSelected;
        this.removeAllSelections();
        if (isSelected) {
            gap.isSelected = true;
            this.selectedGap = gap;
        } else {
            this.selectedGap = null;
        }
        this.selectedTask = null;
        this.updateProjects();
    }
    
    updateProjects() {
        let selectedProjects = [];

        let task = this.selectedTask;
        if (task && task.projects && task.projects.length > 0) {
            task.projects.forEach(p => {
                if (selectedProjects.indexOf(p) < 0) selectedProjects.push(p);
            });
        }
        let gap  = this.selectedGap;
        if (gap && gap.projects && gap.projects.length > 0) {
            gap.projects.forEach(p => {
                if (selectedProjects.indexOf(p) < 0) selectedProjects.push(p);
            });
        }
        this.selectedProjects.splice(0, this.selectedProjects.length);
        selectedProjects.forEach(p => this.selectedProjects.push(p));
    }
}
