import {Router, RouterConfiguration} from 'aurelia-router'
import {computedFrom} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class App {
  title: string;
  router: Router;
  config: RouterConfiguration;
  
  constructor(private databaseService: DatabaseService) {}
  
  configureRouter(config: RouterConfiguration, router: Router) {
    this.config = config;
    
    config.title = this.title || 'Catalogue';
    config.map([
      { route: ['', 'welcome'],      name: 'welcome',        moduleId: 'welcome',        nav: true,  title: 'Welcome' },
      { route: 'tasks',              name: 'tasks',          moduleId: 'tasks',          nav: true,  title: 'Tasks' },
      { route: 'incidents',          name: 'incidents',      moduleId: 'incidents',      nav: true,  title: 'Incidents' },
      { route: 'gaps',               name: 'gaps',           moduleId: 'gaps',           nav: true,  title: 'Gaps' },
      { route: 'projects',           name: 'projects',       moduleId: 'projects',       nav: true,  title: 'Projects' },
      { route: 'project/:id',        name: 'project',        moduleId: 'projectDetails', nav: false, title: 'Project details' },
      { route: 'login',              name: 'login',          moduleId: './login',        nav: false, title: 'Login' }
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
