import {bindable} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';
import {IUser} from './models/user';

@autoinject
export class NavBar {
  // User isn't authenticated by default
  _isAuthenticated = false;
  @bindable router = null;

  constructor(private auth: AuthService) { };

  // We can check if the user is authenticated
  // to conditionally hide or show nav bar items
  get isAuthenticated() {
    return this.auth.isAuthenticated();
  };

  get isAdmin() {
    let me: IUser = this.auth.getTokenPayload();
    return me.role && me.role === 'admin';
  }
}