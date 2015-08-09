var gulp = require('gulp');

var componentViewer = require('component-viewer');

gulp.task('components', function() {
  componentViewer({
    scenarios: './test/scenarios/**/*.js',
    assets: './lib'
  });
});

