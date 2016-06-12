import {computedFrom} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {DatabaseService} from './services/DatabaseService';

@autoinject
export class Welcome {
  heading = 'Welcome to Catalogue!';
  description = "";

  constructor(private databaseService: DatabaseService) {
  }

  activate() {
    return this.databaseService.database.then(db => {
      this.heading = db.app.welcomeText;
      this.description = db.app.description;
    });
  }

//   canDeactivate() {
//     if (this.fullName !== this.previousValue) {
//       return confirm('Are you sure you want to leave?');
//     }
//   }
}

// export class UpperValueConverter {
//   toView(value) {
//     return value && value.toUpperCase();
//   }
// }
