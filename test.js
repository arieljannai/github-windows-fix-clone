var cachedb	= require('./cachedb.js')('./test/files/cache.db');
var reg			= require('./reg.js');

reg.getGhExe()
	.then(function(success){
		console.log('resolved: %s', success);
	}, function(reason){
		console.log('reason: %s', reason);
	});


// cachedb.getRepoLocation()
// 	.then(function(success){
// 		console.log('resolved: %s', success);
// 	}, function(reason){
// 		console.log('reason: %s', reason);
// 	});


function exit(reason) {
	reason = reason || "No argumants were supplied. Try again and this time don't forget your parameters!";
	console.log(reason);
	process.exit();
}
