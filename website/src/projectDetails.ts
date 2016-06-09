import {autoinject}      from 'aurelia-framework';
import {Router}          from 'aurelia-router'
import {AuthService}     from 'aurelia-authentication';
import {IProject}        from 'models/project';
import {IUser}           from 'models/user';
import {DatabaseService} from 'services/DatabaseService';
import {IDatabase}       from "models/database";

@autoinject
export class ProjectDetails {
    private db: IDatabase;
    heading = 'Project details';
    project: IProject;

    constructor(private router: Router, private databaseService: DatabaseService, private auth: AuthService) {}
    
    activate(params) {
        //console.log(`ID: ${JSON.stringify(params, null, 2)}`);
        return this.databaseService.database.then(db => {
            this.db = db;
            this.project = db.projects[+params.id];
        });
   }

   get canEdit() {
       const editRoles = ['analyst', 'admin'];

       let p: IUser = this.auth.getTokenPayload();
       return p && editRoles.indexOf(p.role) >= 0;
   }

   delete() {
       let i = this.db.projects.indexOf(this.project);
       if (i >= 0) this.db.projects.splice(i, 1);
       this.router.navigate(`#/projects`);
   }
}