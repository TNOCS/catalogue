import {autoinject} from 'aurelia-framework';
import {ICharacteristic} from 'models/characteristic';
import {IProject} from './models/project';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class CriticalInfrastructures {
    heading = 'Critical Infrastructures';
    cis: ICharacteristic[] = [];
    selectedCi: ICharacteristic;
    selectedProjects: IProject[] = [];

    constructor(private databaseService: DatabaseService) {}

    activate() {
        (<any>$('[data-toggle="tooltip"]')).tooltip();
        
        return this.databaseService.database.then(db => {
            this.cis = db.ciSectors;
        });
    }
    
    /** Only allow the user to select a asingle Gap */
    selectCi(ci: ICharacteristic) {
        if (!ci.projects || ci.projects.length === 0) return;
        this.cis.forEach(i => {
            i.isSelected = false;
        });
        ci.isSelected = true;
        this.selectedCi = ci;
        this.updateProjects();
    }

    updateProjects() {
        this.selectedProjects = [];
        if (this.selectedCi && this.selectedCi.projects && this.selectedCi.projects.length > 0) {
            this.selectedCi.projects.forEach(p => {
                if (this.selectedProjects.indexOf(p) < 0) this.selectedProjects.push(p);
            });
        }
    }
    
}
