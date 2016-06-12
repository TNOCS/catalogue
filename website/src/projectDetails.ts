import {autoinject}      from 'aurelia-framework';
import {Router}          from 'aurelia-router';
import {AuthService}     from 'aurelia-authentication';
import {IProject}        from './models/project';
import {IUser}           from './models/user';
import {DatabaseService} from './services/DatabaseService';
import {IDatabase}       from "./models/database";
import {Prompt}          from './components/Prompt';
import {Rest, Config}    from 'aurelia-api';
import {DialogService, DialogResult}  from 'aurelia-dialog';

@autoinject
export class ProjectDetails {
    private db: IDatabase;
    heading = 'Project details';
    project: IProject;
    api: Rest;

    constructor(private router: Router, private databaseService: DatabaseService, private auth: AuthService, private dialogService: DialogService, private apiConfig: Config) {
        this.api = apiConfig.getEndpoint('api');
    }

    activate(params) {
        //console.log(`ID: ${JSON.stringify(params, null, 2)}`);
        return this.databaseService.database.then(db => {
            this.db = db;
            let id = params.id;
            db.projects.some(p => {
                if (p.id !== id) return false;
                this.project = p;
                return true;
            });
        });
    }

    get canEdit() {
        const editRoles = ['analyst', 'admin'];

        let p: IUser = this.auth.getTokenPayload();
        return p && editRoles.indexOf(p.role) >= 0;
    }

    delete() {
        if (!this.project.id) return;
        this.dialogService.open({ viewModel: Prompt, model: `Do you really want to delete ${this.project.shortTitle}?` })
            .then((response: DialogResult) => {
                if (!response.wasCancelled) {
                    let yes = response.output;
                    if (yes) {
                        this.deleteProject();
                    }
                }
            });
    }

    private deleteProject() {
        this.api.destroy('/projects', this.project.id)
            .then(() => {
                let i = this.db.projects.indexOf(this.project);
                if (i >= 0) this.db.projects.splice(i, 1);
                this.databaseService.parseData();
                this.router.navigate(`#/projects`);
            })
            .catch(err =>
                console.log('Error deleting existing project:' + JSON.stringify(err))
            );
    }
}