
var spawn = require('child_process').spawn;
var spawnSync = require('child_process').spawnSync;

var setting = require('../setting');

var targetA = 'http://localhost:' + setting.ports.origin + '/viewer.html'
var targetB = 'http://localhost:' + setting.ports.diff + '/viewer.html'

var queries = require('./scenario_to_queries')(setting.scenario_path)

require('./copy_itself')(setting.diff_branch, setting.copy_dir);


var target = spawn('node', [ __dirname + '/../component.js', '--port', setting.ports.origin]);
var diff = spawn('node', [ 'component.js', '--port', setting.ports.origin], {cwd: setting.copy_dir});


setTimeout(function () {

    for ( var query of queries ){

        var urlA = targetA + query;
        var urlB = targetB + query;

        spawnSync('reftest-runner', ['-b', 'firefox', '--useExternalServer', '--targetA', urlA, '--targetB', urlB]);
    }

    target.kill('SIGTERM');
    diff.kill('SIGTERM');

}, 5 * 1000);

