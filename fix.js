//var githubCommand = process.argv[2] || exit();


var regedit = require('regedit')


regedit.list('HKCR\\github-windows\\shell\\open\\command', function(err, result) {
	console.log(result);
})

// example: github-windows://openRepo/https://github.com/qw3rtman/git-fire
// githubCommand = githubCommand.substr(26);
//console.log(githubCommand);

function exit(reason) {
	reason = reason || "No argumants were supplied. Try again and this time don't forget your parameters!";
	console.log(reason);
	process.exit();
}