import {autoinject}         from 'aurelia-framework';
import {DialogController}   from 'aurelia-dialog';
import {IUser}              from '../models/user';

@autoinject
export class Prompt {
    question = '';

    constructor(private controller: DialogController) {}

    activate(question: string) {
        this.question = question;
    }
}