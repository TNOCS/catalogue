import {autoinject} from 'aurelia-framework';
import {ICharacteristic} from './models/characteristic';
import {IProject} from './models/project';
import {DatabaseService} from './services/DatabaseService';

@autoinject
export class Incidents {
    heading = 'Hazards & Risks';
    incidents: ICharacteristic[] = [];
    selectedIncident: ICharacteristic;
    selectedProjects: IProject[] = [];

    constructor(private databaseService: DatabaseService) {}

    activate() {
        (<any>$('[data-toggle="tooltip"]')).tooltip();
        
        return this.databaseService.database.then(db => {
            this.incidents = db.incidents;
        });
    }
    
    /** Only allow the user to select a asingle Gap */
    selectIncident(incident: ICharacteristic) {
        if (!incident.projects || incident.projects.length === 0) return;
        this.incidents.forEach(i => {
            i.children.forEach(sub => sub.isSelected = false);
        });
        incident.isSelected = true;
        this.selectedIncident = incident;
        this.updateProjects();
    }

    updateProjects() {
        this.selectedProjects = [];
        if (this.selectedIncident && this.selectedIncident.projects && this.selectedIncident.projects.length > 0) {
            this.selectedIncident.projects.forEach(p => {
                if (this.selectedProjects.indexOf(p) < 0) this.selectedProjects.push(p);
            });
        }
    }
    
}
