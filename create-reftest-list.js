
var glob = require('glob');
var path = require('path');
var fs = require('fs');

var test_files = glob.sync('./test/**/*.js');

var targetA = 'http://localhost:3000/view.html'
var targetB = 'http://localhost:3001/view.html'

var list = [];

for ( file of test_files ){
	var p = path.parse(file);
	var inner = p.name.replace('.js', '');

	var test = require(file);

	Object.keys(test.scenarios).forEach(function(scenario_name){
		var param = '?inner=' +encodeURIComponent(inner) + '&scenario=' + encodeURIComponent(scenario_name);
		list.push('== ' + targetA + param + ' ' + targetB + param )
	});
}

fs.writeFileSync('reftest.list', list.join('\n'));

