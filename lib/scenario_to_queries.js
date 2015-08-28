var glob = require('glob');
var path = require('path');


module.exports = function (scenario_path) {

    var test_files = glob.sync(scenario_path);

    var list = [];

    for ( file of test_files ){
        
        var file_path = path.parse(file);
        var inner = file_path.name.replace('.js', '');

        var test = require(file);

        Object.keys(test.scenarios).forEach(function(scenario_name){
            var param = '?inner=' +encodeURIComponent(inner) + '&scenario=' + encodeURIComponent(scenario_name);
            list.push(param);
        });
    }

    return list;
}
