import {AuthService} from 'aurelia-authentication';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Logout {

    constructor(private auth: AuthService) { };

    activate() {
        // When we get to the logout route, the logout 
        // method on the auth service will be called  
        // and we will be redirected to the login view
        this.auth.logout("#/login")
            .then(response => {
                console.log("Logged Out");
            })
            .catch(err => {
                console.log("Error Logging Out");
            });

    };
}