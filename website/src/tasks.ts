import {autoinject} from 'aurelia-framework';
import {ICharacteristic} from 'models/characteristic';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class Tasks {
    heading = 'Tasks';
    tasks: ICharacteristic[] = [];

    constructor(private databaseService: DatabaseService) {
    }

    activate() {
        return this.databaseService.database.then(db => {
            this.tasks = db.tasks;
        });
    }
}
