import {autoinject} from 'aurelia-framework';
import {ICharacteristic} from 'models/characteristic';
import {DatabaseService} from 'services/DatabaseService';

@autoinject
export class Gaps {
    heading = 'Gaps';
    gaps: ICharacteristic[] = [];

    constructor(private databaseService: DatabaseService) {
    }

    activate() {
        (<any>$('[data-toggle="tooltip"]')).tooltip();
        
        return this.databaseService.database.then(db => {
            this.gaps = db.gaps;
        });
    }
}
