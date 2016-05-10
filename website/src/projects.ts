import {autoinject} from 'aurelia-framework';
import {IProject} from 'models/project';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class Projects {
    heading = 'Projects';
    projects: IProject[] = [];

    constructor(private databaseService: DatabaseService) {
    }

    activate() {
        return this.databaseService.database.then(db => {
            this.projects = db.projects;
        });
    }
}
