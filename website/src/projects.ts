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
            let index = 0;
            db.projects.forEach(p => p.index = index++);
            this.projects = db.projects;
        });
    }
}
