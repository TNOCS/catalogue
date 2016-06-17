// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
    'list': [
        'index.html',
        'config.js',
        'favicon.ico',
        "img/*",
        'LICENSE',
        "jspm_packages/npm/bluebird@3.4.0/js/browser/bluebird.min.js",
        'jspm_packages/system.js',
        'jspm_packages/system-polyfills.js',
        'jspm_packages/system-csp-production.js',
        // 'jspm_packages/npm/aurelia-authentication@3.0.0-rc4/aurelia-authentication.js',
        // 'jspm_packages/npm/aurelia-authentication@3.0.0-rc4/authenticatedFilterValueConverter.js',
        // 'jspm_packages/npm/aurelia-authentication@3.0.0-rc4/authenticatedValueConverter.js',
        // 'jspm_packages/npm/aurelia-authentication@3.0.0-rc4/authFilterValueConverter.js',
        'jspm_packages/npm/aurelia-dialog@0.6.2/resources/*',
        'jspm_packages/npm/aurelia-dialog@0.6.2/dialog.css',
        'styles/styles.css'
    ],
    // this section lists any jspm packages that have
    // unbundled resources that need to be exported.
    // these files are in versioned folders and thus
    // must be 'normalized' by jspm to get the proper
    // path.
    'normalize': [
        [
            // include font-awesome.css and its fonts files
            'font-awesome', [
                '/css/font-awesome.min.css',
                '/fonts/*'
            ]
        ],
        [
            // include bootstrap's font files
            'bootstrap', [
                '/fonts/*'
            ]
        ]
    ]
};