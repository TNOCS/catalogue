import {AuthService}                  from 'aurelia-authentication';
import {inject}                       from 'aurelia-framework';
import {Endpoint, Rest}               from 'aurelia-api';
import {DialogService, DialogResult}  from 'aurelia-dialog';
import {DatabaseService}              from 'services/DatabaseService'
import {UserEdit}                     from './userEdit';
import {Prompt}                       from 'components/Prompt';
import {IUser}                        from 'models/user';
import {Utils}                        from 'helpers/Utils';

@inject(Endpoint.of('api'), Endpoint.of('auth'), DialogService, DatabaseService)
export class Users {
  heading = 'Users';
  users = [];
  invite: {
    name?: string;
    mailto?: string;
  };

  constructor(private api: Rest, private auth: AuthService, private dialogService: DialogService, private db: DatabaseService) {}

  activate() {
    return this.api.find('/users')
      .then(users => this.users = users)
      .catch(err => console.error('Error getting users: ' + err))
  }

  edit(user: IUser) {
    this.dialogService.open( { viewModel: UserEdit, model: user } )
      .then((response: DialogResult) => {
        if (!response.wasCancelled) {
          let newUser = response.output;
          if (newUser && newUser.email && newUser.displayName && newUser.role) { 
            user.email       = newUser.email;
            user.displayName = newUser.displayName;
            user.role        = newUser.role;
            this.api.update('/users', user.email, user)
              .then(() => this.activate())
              .catch(err => 
                console.log('Error updating user:' + err)
              );
          }
        }
      });
  }

  newUser() {
    this.invite = {};
    this.dialogService.open( { viewModel: UserEdit, model: {} } )
      .then((response: DialogResult) => {
        if (!response.wasCancelled) {
          let user: IUser = response.output;
          if (user && user.email && user.displayName && user.role) {
            user.password = Utils.generatePassword(12);
            this.api.create('/users', user)
              .then(() => {
                this.invite.name = user.displayName;
                let signup = this.db.data.app.signup;
                let body = signup.body
                  .replace('\n', '<br/>')   // replace \n as rich text, i.e. an URL encoded <br> tag.
                  .replace('{{user}}', user.displayName)
                  .replace('{{email}}', user.email)
                  .replace('{{role}}', user.role)
                  .replace('{{password}}', user.password);
                this.invite.mailto = Utils.createMailToLink(user.email, signup.subject, body);
                this.activate();
              })
              .catch(err => 
                console.log('Error creating new user:' + err)
              );
          }
        }
      });
  }

  delete(user: IUser) {
    if (!user || !user.email) return;
    this.dialogService.open( { viewModel: Prompt, model: `Do you really want to delete ${user.displayName}?` } )
      .then((response: DialogResult) => {
        if (!response.wasCancelled) {
          let yes = response.output;
          if (yes) {
            this.api.destroy('/users', user.email)
              .then(() => this.activate())
              .catch(err => 
                console.log('Error deleting existing user:' + err)
              );
          }
        }
      });
  }

}
