
var exec = require('child_process').exec;

exec('rsync -ar --delete . ~/tmp', function(){
	var target = exec('node component.js --port 3000');
	var source = exec('cd ~/tmp && node component.js --port 3001');

	setTimeout(function (argument) {
		exec('node create-reftest-list.js',function(){
			exec('reftest-runner -b firefox --list reftest.list --useExternalServer', function () {
				target.kill();
				source.kill();
			})
		})
	}, 5 * 1000);
});
