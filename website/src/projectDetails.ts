import {autoinject}      from 'aurelia-framework';
import {AuthService}     from 'aurelia-authentication';
import {IProject}        from 'models/project';
import {IUser}           from 'models/user';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class ProjectDetails {
    heading = 'Project details';
    project: IProject;

    constructor(private databaseService: DatabaseService, private auth: AuthService) {}
    
    activate(params) {
        //console.log(`ID: ${JSON.stringify(params, null, 2)}`);
        return this.databaseService.database.then(db => this.project = db.projects[+params.id]);
   }

   get canEdit() {
       const editRoles = ['analyst', 'admin'];

       let p: IUser = this.auth.getTokenPayload();
       return p && editRoles.indexOf(p.role) >= 0;
   }
}