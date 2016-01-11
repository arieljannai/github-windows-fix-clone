//var githubCommand = process.argv[2] || exit();


var regedit = require('regedit');
var H = require('./helper.js');
var conf = require('./config/config.js').reg;
var regLocation = conf.githubPath;
var bacpName = conf.backupName;
var backupGhPathObject = conf.backupGhPathObject;

var githubExe = '';
var defaultValue = '';

function putValue(backupGhObject) {
	return new Promise(function(resolve, reject) {
		regedit.putValue(backupGhObject, function(err) {
			if (err) {
				console.log('err1: %s', err);
				return reject(err);
			} else {
				return resolve(true);
			}
		});
	});
}

function splitGhPath(fullKey) {
	return fullKey.split(conf.regexSplit)[1];
}

function getDefaultValue(regPath) {
	return new Promise(function(resolve, reject) {
		regedit.list(regPath, function(err, result) {
			if (err) {
				console.log('err2: %s', err);
				return reject(err);
			}

			var regValue = result[regPath].values[''].value;
			return resolve(splitGhPath(regValue));
		});
	});
}

module.exports = {
	getGhExe : function() {
		return getDefaultValue(regLocation)
			.then(function(ghExe) {
				return putValue(backupGhPathObject)
					.then(function(result) {
						return ghExe;
					})
					.catch(function(err) {
						console.log('err3: %s', err);
						return Promise.reject(err);
					});
			})
			.catch(function(err) {
				console.log("error: %s", err);
				return Promise.reject(err);
			});
	}
}

// if (!result[regLocation].values[bacpName]) {
// 	backupGhPathObject[regLocation][bacpName].value = defaultValue;
// 	putValuePrm()
// 		.then(function(result) {},
// 		function(reason) {
// 			console.log("error: %s", err);
// 			return reject('Could not craete backup value in registry: %s', reason);
// 		});
// }
//
// if (err) {
// 	console.log("error: %s", err);
// 	return reject('Could not get github-windows key: %s', err);
// } else {
// 	console.log(defaultValue);
// 	console.log(githubExe);
// 	return resolve(githubExe);
// }





// regedit.list(regLocation, function(err, result) {
// 	defaultValue = result[regLocation].values[''].value;
// 	githubExe = defaultValue.split(conf.regexSplit)[1];
//
// 	backupGhPathObject[conf.githubPath][conf.backupName].value = defaultValue;
//
// 	if (!result[regLocation].values['Backup']) {
// 		regedit.putValue(backupGhPathObject, function(err) {
// 			H.err(err);
// 		});
// 	}
//
// 	H.err(err);
// 	console.log(defaultValue);
// 	console.log(githubExe);
// });



// example: github-windows://openRepo/https://github.com/qw3rtman/git-fire
// githubCommand = githubCommand.substr(26);
//console.log(githubCommand);
