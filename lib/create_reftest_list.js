var fs = require('fs');
var setting = require('../setting');

var queries = require('./scenario_to_queries')(setting.scenario_path)

var targetA = 'http://localhost:' + setting.ports.origin + '/viewer.html'
var targetB = 'http://localhost:' + setting.ports.diff + '/viewer.html'

var lines = []
for ( var query of queries ){
    lines.push('== ' + targetA + query + ' ' + targetB + query );
}

fs.writeFileSync(setting.reftest_list_path, lines.join('\n'));

