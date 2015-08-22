var argv = require('yargs').argv;
var componentViewer = require('component-viewer');

var port = argv.port || process.env.PORT || 3000;

componentViewer({
    port: port,
    scenarios: './test/scenarios/**/*.js',
    assets: './lib'
});

