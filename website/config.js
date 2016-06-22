System.config({
  defaultJSExtensions: true,
  transpiler: "none",
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
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.2.0.1",
    "aurelia-api": "npm:aurelia-api@3.0.0-rc4",
    "aurelia-authentication": "github:spoonx/aurelia-authentication@master",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.2.0.1",
    "aurelia-dialog": "npm:aurelia-dialog@1.0.0-beta.1.0.2",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.2.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.2.0.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.2.0.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.2.0.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.2.0.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.2.0.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.3.0.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.2.0.3",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "d3": "npm:d3@3.5.17",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "marked": "npm:marked@0.3.5",
    "text": "github:systemjs/plugin-text@0.0.3",
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
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
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
    "npm:aurelia-animator-css@1.0.0-beta.2.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-api@3.0.0-rc4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.2.0.1",
      "extend": "npm:extend@3.0.0",
      "qs": "npm:qs@6.2.0"
    },
    "npm:aurelia-binding@1.0.0-beta.2.0.7": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.2.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.2.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.2.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.2.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.2.0.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.3.0.4",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.2.0.3"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-dialog@1.0.0-beta.1.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-framework@1.0.0-beta.2.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.2.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.2.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-loader@1.0.0-beta.2.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.2.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.3.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.2.0.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-router@1.0.0-beta.2.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-task-queue@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.2.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.3.0.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.2.0.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-templating@1.0.0-beta.3.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1"
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
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "blur-image.js",
      "ci.html!github:systemjs/plugin-text@0.0.3.js",
      "ci.js",
      "components/characteristic.html!github:systemjs/plugin-text@0.0.3.js",
      "components/characteristic.js",
      "components/prompt-question.html!github:systemjs/plugin-text@0.0.3.js",
      "components/prompt-question.js",
      "components/scatter-plot.html!github:systemjs/plugin-text@0.0.3.js",
      "components/scatter-plot.js",
      "gaps.html!github:systemjs/plugin-text@0.0.3.js",
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
      "incidents.html!github:systemjs/plugin-text@0.0.3.js",
      "incidents.js",
      "login.html!github:systemjs/plugin-text@0.0.3.js",
      "login.js",
      "logout.html!github:systemjs/plugin-text@0.0.3.js",
      "logout.js",
      "main.js",
      "models/characteristic.js",
      "models/database.js",
      "models/project-filter-configuration.js",
      "models/project.js",
      "models/user.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "nav-bar.js",
      "profile.html!github:systemjs/plugin-text@0.0.3.js",
      "profile.js",
      "projectDetails.html!github:systemjs/plugin-text@0.0.3.js",
      "projectDetails.js",
      "projectEdit.html!github:systemjs/plugin-text@0.0.3.js",
      "projectEdit.js",
      "projects.html!github:systemjs/plugin-text@0.0.3.js",
      "projects.js",
      "services/DatabaseService.js",
      "services/authConfig.js",
      "signup.html!github:systemjs/plugin-text@0.0.3.js",
      "signup.js",
      "tasks.html!github:systemjs/plugin-text@0.0.3.js",
      "tasks.js",
      "userEdit.html!github:systemjs/plugin-text@0.0.3.js",
      "userEdit.js",
      "users.html!github:systemjs/plugin-text@0.0.3.js",
      "users.js",
      "welcome.html!github:systemjs/plugin-text@0.0.3.js",
      "welcome.js"
    ],
    "aurelia.js": [
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:spoonx/aurelia-authentication@master.js",
      "github:spoonx/aurelia-authentication@master/aurelia-authentication.js",
      "github:spoonx/aurelia-authentication@master/authFilterValueConverter.js",
      "github:systemjs/plugin-text@0.0.3.js",
      "github:systemjs/plugin-text@0.0.3/text.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-beta.2.0.1.js",
      "npm:aurelia-animator-css@1.0.0-beta.2.0.1/aurelia-animator-css.js",
      "npm:aurelia-api@3.0.0-rc4.js",
      "npm:aurelia-api@3.0.0-rc4/aurelia-api.js",
      "npm:aurelia-binding@1.0.0-beta.2.0.7.js",
      "npm:aurelia-binding@1.0.0-beta.2.0.7/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.2.0.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.2.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/ai-dialog-body.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/ai-dialog-footer.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/ai-dialog-header.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/ai-dialog.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/attach-focus.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/aurelia-dialog.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/dialog-configuration.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/dialog-controller.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/dialog-options.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/dialog-renderer.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/dialog-result.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/dialog-service.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/lifecycle.js",
      "npm:aurelia-dialog@1.0.0-beta.1.0.2/renderer.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.2.0.1.js",
      "npm:aurelia-fetch-client@1.0.0-beta.2.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.2.0.1.js",
      "npm:aurelia-framework@1.0.0-beta.2.0.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.2.0.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.2.0.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.2.0.1.js",
      "npm:aurelia-history@1.0.0-beta.2.0.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.2.0.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.2.0.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.2.0.1.js",
      "npm:aurelia-loader@1.0.0-beta.2.0.1/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.2.0.1.js",
      "npm:aurelia-logging-console@1.0.0-beta.2.0.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.2.0.1.js",
      "npm:aurelia-logging@1.0.0-beta.2.0.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.2.0.1.js",
      "npm:aurelia-metadata@1.0.0-beta.2.0.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.3.0.1.js",
      "npm:aurelia-pal-browser@1.0.0-beta.3.0.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.2.0.0.js",
      "npm:aurelia-pal@1.0.0-beta.2.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.2.0.1.js",
      "npm:aurelia-path@1.0.0-beta.2.0.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.2.0.1.js",
      "npm:aurelia-polyfills@1.0.0-beta.2.0.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.2.0.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.2.0.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.2.0.1.js",
      "npm:aurelia-router@1.0.0-beta.2.0.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.2.0.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.2.0.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.2.0.2.js",
      "npm:aurelia-templating-binding@1.0.0-beta.2.0.2/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.3.0.4/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.2.0.3.js",
      "npm:aurelia-templating-router@1.0.0-beta.2.0.3/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.2.0.3/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.2.0.3/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.2.0.3/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.3.0.6.js",
      "npm:aurelia-templating@1.0.0-beta.3.0.6/aurelia-templating.js",
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