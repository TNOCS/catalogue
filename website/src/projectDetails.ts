import {autoinject} from 'aurelia-framework';
import {IProject} from 'models/project';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class ProjectDetails {
    heading = 'Project details';
    project: IProject;

    constructor(private databaseService: DatabaseService) {
    }
    
    activate(params) {
        console.log(`ID: ${JSON.stringify(params, null, 2)}`);
        return this.databaseService.database.then(db => this.project = db.projects[+params.id]);
   }
}