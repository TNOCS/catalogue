import {AuthService} from 'aurelia-authentication';
import {autoinject} from 'aurelia-framework';
import {IUser} from './models/user';

@autoinject
export class Profile {
    constructor(public auth: AuthService) { };

    user: IUser;

    heading         = 'About me';
    email           = '';
    displayName     = '';
    role            = '';
    password        = '';
    newPassword     = '';
    confirmPassword = '';
    message         = '';

    activate() {
        this.refresh();
    }

    private refresh() {
        this.user        = this.auth.getTokenPayload();
        this.email       = this.user.sub;
        this.displayName = this.user.displayName;
        this.role        = this.user.role;

        this.password        = '';
        this.newPassword     = '';
        this.confirmPassword = '';

        console.log('Payload: ' + JSON.stringify(this.user));
    }

    update() {
        this.message = '';
        let crit = this.email;
        let body: IUser = <IUser> {};
        body.sub = this.email;
        if (this.displayName) body.displayName = this.displayName;
        if (this.newPassword && this.newPassword === this.confirmPassword) {
            body.password = this.password;
            body.newPassword = this.newPassword;
            crit = this.email;
        } 
        return this.auth.updateMe(body, crit)
            .then(response => {
                console.log('Successfully updated profile: ' + response);
                this.message = 'Successfully updated profile';
                this.auth.updateToken()
                    .then(() => this.refresh())
                    .catch(err => console.error('Error refreshing token: ' + JSON.stringify(err)));
            })
            .catch(err => {
                this.message = 'Error updating profile';
                console.error('Error updating profile: ' + JSON.stringify(err)); 
            });
    };
}