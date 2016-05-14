import 'bootstrap';
import authConfig from './services/authConfig';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('auth', 'https://localhost:3456/catalogue/auth')
        .registerEndpoint('protected-api', 'https://myapi.org/protected-api')
        .registerEndpoint('public-api', 'http://myapi.org/public-api');
    })
    //Uncomment the line below to enable animation.
    //.plugin('aurelia-animator-css')
    .plugin('aurelia-authentication', baseConfig => {
        baseConfig.configure(authConfig);
    });    

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
