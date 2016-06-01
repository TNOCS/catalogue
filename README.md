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