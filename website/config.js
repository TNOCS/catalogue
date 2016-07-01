System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-rc.1.0.0",
    "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
    "aurelia-authentication": "github:spoonx/aurelia-authentication@master",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.1.1.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "d3": "npm:d3@3.5.17",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "marked": "npm:marked@0.3.5",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:spoonx/aurelia-authentication@master": {
      "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "extend": "npm:extend@3.0.0",
      "jwt-decode": "npm:jwt-decode@2.0.1"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-api@3.0.0-rc4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.0",
      "extend": "npm:extend@3.0.0",
      "qs": "npm:qs@6.2.0"
    },
    "npm:aurelia-binding@1.0.0-rc.1.0.2": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-dialog@1.0.0-beta.1.1.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-framework@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-history-browser@1.0.0-rc.1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-rc.1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-task-queue@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-resources@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-router@1.0.0-rc.1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating@1.0.0-rc.1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jwt-decode@2.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "app.js": [
      "aurelia-framework",
      "./services/DatabaseService",
      "aurelia-authentication"
    ],
    "blur-image.js": [
      "aurelia-framework"
    ],
    "ci.js": [
      "aurelia-framework",
      "./services/DatabaseService"
    ],
    "components/characteristic.js": [
      "aurelia-framework"
    ],
    "components/prompt-question.js": [
      "aurelia-framework",
      "aurelia-dialog"
    ],
    "components/scatter-plot.js": [
      "aurelia-framework",
      "d3"
    ],
    "gaps.js": [
      "aurelia-framework",
      "./services/DatabaseService"
    ],
    "helpers/MarkdownValueConverter.js": [
      "marked"
    ],
    "incidents.js": [
      "aurelia-framework",
      "./services/DatabaseService"
    ],
    "login.js": [
      "aurelia-authentication",
      "aurelia-framework"
    ],
    "logout.js": [
      "aurelia-authentication",
      "aurelia-framework"
    ],
    "main.js": [
      "bootstrap",
      "fetch"
    ],
    "nav-bar.js": [
      "aurelia-framework",
      "aurelia-authentication"
    ],
    "profile.js": [
      "aurelia-authentication",
      "aurelia-framework"
    ],
    "projectDetails.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-authentication",
      "./services/DatabaseService",
      "./components/prompt-question",
      "aurelia-api",
      "aurelia-dialog"
    ],
    "projectEdit.js": [
      "aurelia-framework",
      "aurelia-router",
      "aurelia-api",
      "aurelia-authentication",
      "./services/DatabaseService"
    ],
    "projects.js": [
      "aurelia-router",
      "aurelia-framework",
      "aurelia-authentication",
      "./services/DatabaseService",
      "./helpers/Utils"
    ],
    "services/DatabaseService.js": [
      "aurelia-framework",
      "aurelia-api",
      "../models/project-filter-configuration"
    ],
    "signup.js": [
      "aurelia-framework",
      "./services/DatabaseService"
    ],
    "tasks.js": [
      "aurelia-framework",
      "./services/DatabaseService"
    ],
    "userEdit.js": [
      "aurelia-framework",
      "aurelia-dialog"
    ],
    "users.js": [
      "aurelia-authentication",
      "aurelia-framework",
      "aurelia-api",
      "aurelia-dialog",
      "./services/DatabaseService",
      "./userEdit",
      "./components/prompt-question",
      "./helpers/Utils"
    ],
    "welcome.js": [
      "aurelia-framework",
      "./services/DatabaseService"
    ]
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "blur-image.js",
      "ci.html!github:systemjs/plugin-text@0.0.8.js",
      "ci.js",
      "components/characteristic.html!github:systemjs/plugin-text@0.0.8.js",
      "components/characteristic.js",
      "components/prompt-question.html!github:systemjs/plugin-text@0.0.8.js",
      "components/prompt-question.js",
      "components/scatter-plot.html!github:systemjs/plugin-text@0.0.8.js",
      "components/scatter-plot.js",
      "gaps.html!github:systemjs/plugin-text@0.0.8.js",
      "gaps.js",
      "helpers/BlobToUrl.js",
      "helpers/FileListToArray.js",
      "helpers/FormatDateValueConverter.js",
      "helpers/MarkdownValueConverter.js",
      "helpers/ToUppercaseValueConverter.js",
      "helpers/TrimValueConverter.js",
      "helpers/Utils.js",
      "helpers/project-filter.js",
      "helpers/sort.js",
      "incidents.html!github:systemjs/plugin-text@0.0.8.js",
      "incidents.js",
      "login.html!github:systemjs/plugin-text@0.0.8.js",
      "login.js",
      "logout.html!github:systemjs/plugin-text@0.0.8.js",
      "logout.js",
      "main.js",
      "models/characteristic.js",
      "models/database.js",
      "models/project-filter-configuration.js",
      "models/project.js",
      "models/user.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "nav-bar.js",
      "profile.html!github:systemjs/plugin-text@0.0.8.js",
      "profile.js",
      "projectDetails.html!github:systemjs/plugin-text@0.0.8.js",
      "projectDetails.js",
      "projectEdit.html!github:systemjs/plugin-text@0.0.8.js",
      "projectEdit.js",
      "projects.html!github:systemjs/plugin-text@0.0.8.js",
      "projects.js",
      "services/DatabaseService.js",
      "services/authConfig.js",
      "signup.html!github:systemjs/plugin-text@0.0.8.js",
      "signup.js",
      "tasks.html!github:systemjs/plugin-text@0.0.8.js",
      "tasks.js",
      "userEdit.html!github:systemjs/plugin-text@0.0.8.js",
      "userEdit.js",
      "users.html!github:systemjs/plugin-text@0.0.8.js",
      "users.js",
      "welcome.html!github:systemjs/plugin-text@0.0.8.js",
      "welcome.js"
    ],
    "aurelia.js": [
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:spoonx/aurelia-authentication@master.js",
      "github:spoonx/aurelia-authentication@master/aurelia-authentication.js",
      "github:spoonx/aurelia-authentication@master/authFilterValueConverter.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-rc.1.0.0.js",
      "npm:aurelia-animator-css@1.0.0-rc.1.0.0/aurelia-animator-css.js",
      "npm:aurelia-api@3.0.0-rc4.js",
      "npm:aurelia-api@3.0.0-rc4/aurelia-api.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.2.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.0/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/ai-dialog-body.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/ai-dialog-footer.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/ai-dialog-header.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/ai-dialog.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/attach-focus.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/aurelia-dialog.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/dialog-configuration.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/dialog-controller.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/dialog-options.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/dialog-renderer.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/dialog-result.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/dialog-service.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/lifecycle.js",
      "npm:aurelia-dialog@1.0.0-beta.1.1.0/renderer.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.0.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.0/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.0.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-rc.1.0.0.js",
      "npm:aurelia-router@1.0.0-rc.1.0.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/if.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/show.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.0/with.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.0/router-view.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.0.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.0/aurelia-templating.js",
      "npm:d3@3.5.17.js",
      "npm:d3@3.5.17/d3.js",
      "npm:extend@3.0.0.js",
      "npm:extend@3.0.0/index.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:jwt-decode@2.0.1.js",
      "npm:jwt-decode@2.0.1/lib/atob.js",
      "npm:jwt-decode@2.0.1/lib/base64_url_decode.js",
      "npm:jwt-decode@2.0.1/lib/index.js",
      "npm:marked@0.3.5.js",
      "npm:marked@0.3.5/lib/marked.js",
      "npm:qs@6.2.0.js",
      "npm:qs@6.2.0/lib/index.js",
      "npm:qs@6.2.0/lib/parse.js",
      "npm:qs@6.2.0/lib/stringify.js",
      "npm:qs@6.2.0/lib/utils.js"
    ]
  }
});