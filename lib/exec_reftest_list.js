
var spawn = require('child_process').spawn;
var spawnSync = require('child_process').spawnSync;

var setting = require('../setting');

require('./create_reftest_list');
require('./copy_itself')(setting.diff_branch, setting.copy_dir);


var target = spawn('node', [ __dirname + '/../component.js', '--port', setting.ports.origin]);
var diff = spawn('node', ['component.js', '--port', setting.ports.origin], {cwd: setting.copy_dir});


setTimeout(function () {
    spawnSync('reftest-runner', ['-b', 'firefox', '--list', 'lib/reftest.list', '--useExternalServer']);

    target.kill('SIGTERM');
    diff.kill('SIGTERM');

}, 5 * 1000);
