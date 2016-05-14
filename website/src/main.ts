import 'bootstrap';
import config from './services/authConfig';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    //Uncomment the line below to enable animation.
    //.plugin('aurelia-animator-css')
    .plugin('aurelia-auth', (baseConfig) => {
      baseConfig.configure(config);
    });

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
