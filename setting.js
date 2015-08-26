module.exports = {
    "ports":{
        "origin": 3001,
        "diff": 3002
    },
    "scenario_path": __dirname + "/test/scenarios/**/*.js",
    "reftest_list_path":  __dirname + "/lib/reftest.list",
    "diff_branch": "master",
    "copy_dir": "/tmp/component-viewer-sample"
};