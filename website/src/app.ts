import {Router, RouterConfiguration} from 'aurelia-router'
import {computedFrom} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {DatabaseService} from 'services/DatabaseService';
import {AuthorizeStep} from 'aurelia-authentication';

@autoinject
export class App {
  title: string;
  router: Router;
  config: RouterConfiguration;
  
  constructor(private databaseService: DatabaseService) {}
  
  configureRouter(config: RouterConfiguration, router: Router) {
    this.config = config;    
    config.title = this.title || 'Catalogue';

    config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.

    config.map([
      { route: ['', 'welcome'],      name: 'welcome',        moduleId: 'welcome',        nav: true,  title: 'Welcome' },
      { route: 'tasks',              name: 'tasks',          moduleId: 'tasks',          nav: true,  title: 'Tasks' },
      { route: 'incidents',          name: 'incidents',      moduleId: 'incidents',      nav: true,  title: 'Incidents', auth: true },
      { route: 'gaps',               name: 'gaps',           moduleId: 'gaps',           nav: true,  title: 'Gaps' },
      { route: 'projects',           name: 'projects',       moduleId: 'projects',       nav: true,  title: 'Projects' },
      { route: 'project/:id',        name: 'project',        moduleId: 'projectDetails', nav: false, title: 'Project details' },
      { route: 'login',              name: 'login',          moduleId: 'login',          nav: false, title: 'Login' },
      { route: 'logout',             name: 'logout',         moduleId: 'logout',         nav: false, title: 'Logout' },
      { route: 'profile',            name: 'profile',        moduleId: 'profile',        nav: false, title: 'Profile'},
      { route: 'signup',             name: 'signup',         moduleId: 'signup',         nav: false, title: 'Sign up' }
   // { route: 'users',              name: 'users',          moduleId: 'users',          nav: true,  title: 'Github Users' },
      // { route: 'child-router',       name: 'child-router',   moduleId: 'child-router',   nav: true,  title: 'Child Router' }
    ]);

    this.router = router;
  }
  
  activate() {
    return this.databaseService.database.then(db => {
      this.title = db.app.title;
    if (this.config) this.config.title = db.app.title;
    });
  }
}
