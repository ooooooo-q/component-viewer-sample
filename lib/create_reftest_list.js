var fs = require('fs');
var setting = require('../setting');

var queries = require(setting.scenario_path);

var targetA = 'http://localhost:' + setting.ports.origin + '/viewer.html'
var targetB = 'http://localhost:' + setting.ports.diff + '/viewer.html'

var lines = []
for ( var query of queries ){
    list.push('== ' + targetA + param + ' ' + targetB + param );
}

fs.writeFileSync(setting.reftest_list_path, list.join('\n'));

