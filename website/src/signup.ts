import {AuthService} from 'aurelia-authentication';
import {autoinject} from 'aurelia-framework';
import {DatabaseService} from './services/DatabaseService';

@autoinject
export class Signup {
    mailto: string;

    constructor(private databaseService: DatabaseService) { };

    saveString(s: string) {
        return s && s
                .replace(' ', '%20') 
                .replace('&', '&amp;') 
                .replace('"', '&quot;') 
                .replace('=', '%3D;') 
                .replace(':', '%3A;') 
                .replace('@', '%40;') 
                .replace('?', '%3F;');
    }

    activate() {
        return this.databaseService.database.then(db => {
            let s = db.app.signup;
            this.mailto = `${s.admins.replace(' ', '')}?subject=${this.saveString(s.subject)}&body=${this.saveString(s.body)}`;
        });
    }
}