/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function(global) {
    // wildcard paths
    var paths = {
        'n:*': 'node_modules/*'
    };

    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        'test': 'test',
        'rxjs': 'n:rxjs',
        '@angular': 'n:@angular',
        'angular2': 'n:angular2',
        'lodash': 'n:lodash',        
        'moment': 'n:moment'        
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { defaultExtension: 'js' },
        'angular2': { defaultExtension: 'js' },
        'test': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'lodash': { defaultExtension: 'js' },
        'primeng': { defaultExtension: 'js' },
        'moment': { defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        'angular2',
        'lodash'        
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages,
        paths: paths
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
