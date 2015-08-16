var gulp = require('gulp');
var argv = require('yargs').argv;

var componentViewer = require('component-viewer');

gulp.task('components', function() {
  var port = argv.port || process.env.PORT || 3000;

  componentViewer({
    port: port,
    scenarios: './test/scenarios/**/*.js',
    assets: './lib',

    // preLoaders: [
    //   // { test: /\.js$/, loader: 'marionettejs-loader' }
    // ]

  });
});

