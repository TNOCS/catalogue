# Catalogue
Online catalogue for sharing research projects.


# Exporting your application

I've had some difficulty in getting everything ready for deployment. In Aurelia, this is called exporting, and all you need to do is:  

```gulp export```

This creates an `export` folder which contains all the files needed for deployment.

However, there were some challenges: First of all, I needed to fix an issue in the Aurelia skeleton code 
(`config.js` missed a meta section - the example project has been updated since then). Furthermore, in order to automatically export image 
files, or other content like a JSON file, I needed to be manually add them to the `export.js` file. Finally, all additional jspm packages 
needed to be included in the `bundles.js` file, e.g. in the `dist/aurelia` includes section, I've added packages like `marked` and
`aurelia-api`.

Note: When starting to export your app, all the files get bundled first, so the browser has to make fewer HTTP requests to get your source 
code. As a side-effect, debugging becomes difficult, since by default the bundles minifies all files too. So in order to properly debug again,
after exporting your deployed version, you can use `gulp unbundle`.  

I also encountered two issues while running in Edge or IE: my app wouldn't run. The first problem is that neither supports fetch natively (see 
[caniuse](caniuse.com/#feat=fetch)), as Chrome and Firefox do. Therefore, first install the fetch polyfill using `jspm i fetch` and import it in
`main.ts` using `import 'fetch'`. Finally, add `fetch` to `bundles.js` in the `dist/aurelia` includes section. See also
[here](https://github.com/aurelia/fetch-client/blob/master/doc/article/en-US/http-services.md).  

The second issue is that the Promise implementation in Edge is very slow. In order to fix the Promise performance, use the `bluebird` library's 
implementation of the Promise library. So first install bluebird using `jspm i bluebird`, next insert 
`<script src="jspm_packages/npm/bluebird@3.4.0/js/browser/bluebird.min.js"></script>` _before_ loading system.js in your `index.html`. Finally, add
`"jspm_packages/npm/bluebird@3.4.0/js/browser/bluebird.min.js"` to your `export.js` list. This will copy it to the export folder when deploying. 
