import {autoinject} from 'aurelia-framework';
import {ICharacteristic} from 'models/characteristic';
import {IProject} from './models/project';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class Gaps {
    heading = 'Gaps';
    gaps: ICharacteristic[] = [];
    selectedGap: ICharacteristic;
    selectedProjects: IProject[] = [];

    constructor(private databaseService: DatabaseService) {}

    activate() {
        (<any>$('[data-toggle="tooltip"]')).tooltip();
        
        return this.databaseService.database.then(db => {
            this.gaps = db.gaps;
        });
    }
    
    /** Only allow the user to select a asingle Gap */
    selectGap(gap: ICharacteristic) {
        if (!gap.projects || gap.projects.length === 0) return;
        this.gaps.forEach(g => g.isSelected = false);
        gap.isSelected = true;
        this.selectedGap = gap;
        this.updateProjects();
    }

    updateProjects() {
        this.selectedProjects = [];
        if (this.selectedGap && this.selectedGap.projects && this.selectedGap.projects.length > 0) {
            this.selectedGap.projects.forEach(p => {
                if (this.selectedProjects.indexOf(p) < 0) this.selectedProjects.push(p);
            });
        }
    }
    
}
