/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'materialize': 'vendor/materialize-css',
    'angular2-materialize': 'vendor/angular2-materialize',
    'jquery': 'vendor/jquery',
    'dragula': 'vendor/dragula/dist/dragula.js',
    'ng2-dragula': 'vendor/ng2-dragula'
};
/** User packages configuration. */
var packages = {
    'materialize': {
        'format': 'global',
        'main': 'dist/js/materialize',
        'defaultExtension': 'js'
    },
    'angular2-materialize': {
        'main': 'dist/index',
        'defaultExtension': 'js'
    },
    'ng2-dragula': {
        'format': 'cjs',
        'main': 'ng2-dragula',
        'defaultExtension': 'js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/components/rule-output',
    'app/components/rule-piece',
    'app/components/rule-form',
    'app/components/tabs',
    'app/components/header-piece',
    'app/components/general-piece',
    'app/components/post-detection-piece',
    'app/components/tag-piece',
    'app/components/threshold-piece',
    'app/components/detection-filter-piece',
    'app/components/rule-patterns',
    'app/components/flow-piece',
    'app/components/fragbits-piece',
    'app/components/protocol-piece',
    'app/components/flags-piece',
    'app/components/proto-piece',
    'app/components/payload-regex',
    'app/components/payload-content',
    'app/components/payload-flowbits',
    'app/components/payload-modifier',
    'app/components/payload-bytetest',
    'app/components/payload-byteextract',
    'app/components/payload-bytejump',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=/home/agignac/Projects/old-major-2/old-major/tmp/broccoli_type_script_compiler-input_base_path-LdGsmNED.tmp/0/system-config.js.map