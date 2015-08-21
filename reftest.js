
var exec = require('child_process').exec;

exec('rsync -ar --delete --exclude "/copy_dir" . ~/tmp', function(){
	var target = exec('gulp components --port 3000');
	var source = exec('cd ~/tmp && gulp components --port 3001');

	exec('node create-reftest-list.js',function(){
		exec('reftest-runner -b firefox --list reftest.list --useExternalServer', function () {
			target.kill()
			source.kill()
		})
	})
})
