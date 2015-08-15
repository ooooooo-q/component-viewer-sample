var gulp = require('gulp');

var componentViewer = require('component-viewer');

gulp.task('components', function() {
  componentViewer({
    port: process.env.PORT || 3000,
    scenarios: './test/scenarios/**/*.js',
    assets: './lib',

    // preLoaders: [
    //   // { test: /\.js$/, loader: 'marionettejs-loader' }
    // ]

  });
});

