var spawnSync = require('child_process').spawnSync;

module.exports = function(branch, dest_dir){
    spawnSync("rsync", ["-ar", "--delete", ".", dest_dir], {cwd: __dirname + '/../'});
    spawnSync("git", ["stash"], {cwd: dest_dir} );
    spawnSync("git", ["checkout", branch ], {cwd: dest_dir});
};
