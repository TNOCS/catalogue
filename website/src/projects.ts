import {Router}                     from 'aurelia-router';
import {autoinject}                 from 'aurelia-framework';
import {AuthService}                from 'aurelia-authentication';
import {DatabaseService}            from 'services/DatabaseService';
import {IDatabase}                  from 'models/database';
import {IProject, IParticipant}     from 'models/project';
import {IUser}                      from 'models/user';
import {Utils}                      from 'helpers/Utils';
import {ProjectFilterConfiguration} from 'models/project-filter-configuration';


@autoinject
export class Projects {
    heading = 'Projects & Products';
    projects: IProject[] = [];
    db:       IDatabase;
    config:   ProjectFilterConfiguration;

    constructor(private router: Router, private databaseService: DatabaseService, private auth: AuthService) {
        this.config = databaseService.projectFilterConfig;
    }

    activate() {
        return this.databaseService.database.then(db => {
            this.db = db;
            this.projects = db.projects;
        });
    }

    /** Only admins and analysts can edit */
    get canEdit() {
        const allowedRoles = ['analyst', 'admin']
        let p: IUser = this.auth.getTokenPayload();
        return p && allowedRoles.indexOf(p.role) >=0;
    }

    /** Create a new project and start editing it. */
    newProject() {
        let id = Utils.getGuid();
        let index = this.projects.length;
        let project = <IProject>{
            id:         id,
            logo:       'img/TNO120x120.png',
            tasks:      [],
            gaps:       [],
            incidents:  [],
            ciSectors:  [],
            analysts:   [ { validationLevel: this.db.validationLevels[0] } ],
            maturityLevel:  this.db.maturityLevels[0],
            usabilityLevel: this.db.usabilityLevels[0],
            administration: {
                duration: {},
                coordinator: <IParticipant>{},
                participants: [<IParticipant>{}]
            },
        };
        this.projects.push(project);
        this.router.navigate(`#/editproject/${index}`);
    }
}
