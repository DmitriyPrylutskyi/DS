/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things

    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            loginapp: 'mylogin',
            'app-screen': 'app-screen',
            // angular bundles
            '@angular/common':                   'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler':                 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/core':                     'npm:@angular/core/bundles/core.umd.js',
            '@angular/forms':                    'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/http':                     'npm:@angular/http/bundles/http.umd.js',
            '@angular/platform-browser':         'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/router':                   'npm:@angular/router/bundles/router.umd.js',
            '@angular/upgrade':                  'npm:@angular/upgrade/bundles/upgrade.umd.js',
            // other libraries

            'rxjs': 'npm:rxjs',

            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'moment':                     'npm:moment/moment.js',

            'ng2-uploader':               'npm:ng2-uploader',
            'ng2-material':               'npm:ng2-material'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: { main: './main.js', defaultExtension: 'js' },
            loginapp: { main: './main.js', defaultExtension: 'js' },
            'app-screen': { main: 'main.js', defaultExtension: 'js' },
            rxjs: { defaultExtension: 'js' },
            'angular2-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },
            'ng2-material': { main: 'index.js', defaultExtension: 'js' },
            'ng2-uploader': { main: 'ng2-uploader.js', defaultExtension: 'js' }
        }
    });
////////////////////////////////////////////////////
})(this);