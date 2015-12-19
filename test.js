var sqlite3 = require('sqlite3').verbose();
	
var ab2str = function (buf) {
  return String.fromCharCode.apply(null, buf);
}

var file = 'cache.db',
	stmt = "select Value from CacheElement where Key = '__UserSettings__'",
	regexBaseDir = "BaseRepositoryDirectory.*?\\u0000(..\\\\.*?)\\u0000";

var db3 = new sqlite3.Database(file, sqlite3.OPEN_READONLY, function(err){
	if (err) {
		console.log(err);
	} else {
		db3.get(stmt, [], function(err, row) {
			if (err) {
				console.log(err);
			} else {
				if (row) {
					var myreg = new RegExp(regexBaseDir, "g");
					var matches = myreg.exec(row.Value);
					var match = matches[1];
					console.log(match);
				}
			}
		});
	}
});


