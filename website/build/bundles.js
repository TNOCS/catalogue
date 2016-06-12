module.exports = {
    "bundles": {
        "dist/app-build": {
            "includes": [
                "[**/*.js]",
                "**/*.html!text",
                "**/*.css!text"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": false
            }
        },
        "dist/aurelia": {
            "includes": [
                "fetch",
                "aurelia-framework",
                "aurelia-bootstrapper",
                "aurelia-fetch-client",
                "aurelia-router",
                "aurelia-animator-css",
                "aurelia-templating-binding",
                "aurelia-polyfills",
                "aurelia-templating-resources",
                "aurelia-templating-router",
                "aurelia-loader-default",
                "aurelia-history-browser",
                "aurelia-logging-console",
                "bootstrap",
                "bootstrap/css/bootstrap.css!text",
                "jquery",
                "aurelia-api",
                "aurelia-authentication",
                "aurelia-dialog",
                "marked",
                "d3",
                "text"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": false,
                "rev": false
            }
        }
    }
};