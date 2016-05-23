import {AuthService} from 'aurelia-authentication';
import {autoinject} from 'aurelia-framework';


@autoinject
export class Login {
    constructor(public auth: AuthService) { };

    heading = 'Login';
    email = '';
    password = '';

    login() {
        return this.auth.login(this.email, this.password)
            .then(response => {
                console.log("success logged " + response);
            })
            .catch(err => {
                console.log("login failure");
            });
    };

    authenticate(name) {
        return this.auth.authenticate(name)
            .then(response => {
                console.log("auth response " + response);
            });
    }
}