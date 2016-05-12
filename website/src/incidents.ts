import {autoinject} from 'aurelia-framework';
import {ICharacteristic} from 'models/characteristic';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class Tasks {
    heading = 'Incidents';
    incidents: ICharacteristic[] = [];

    constructor(private databaseService: DatabaseService) {
    }

    activate() {
        (<any>$('[data-toggle="tooltip"]')).tooltip();
        
        return this.databaseService.database.then(db => {
            this.incidents = db.incidents;
        });
    }
}
