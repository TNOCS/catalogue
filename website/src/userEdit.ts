import {autoinject}         from 'aurelia-framework'
import {DialogController}   from 'aurelia-dialog';
import {IUser}              from './models/user'

@autoinject
export class UserEdit {

    user: IUser = {
        email: '',
        displayName: '',
        role: 'analyst'
    };

    roles = ['analyst', 'admin'];

    constructor(private controller: DialogController) {}

    activate(user: IUser) {
        // Create a copy, so we can cancel any changes.
        this.user.email = user.email;
        this.user.displayName = user.displayName;
        this.user.role = user.role;
    }
}