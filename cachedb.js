var sqlite3	= require('sqlite3').verbose();
var conf	= require('./config/config.js').cachedb;

var file = conf.filename;
var stmt = conf.statement;
var regexBaseDir = conf.regex;

function ab2str(buf) {
  return String.fromCharCode.apply(null, buf);
}

module.exports = function(cacheDbPath) {
	return {
		getRepoLocation : function() {
			return new Promise(function(resolve, reject){
				var db3 = new sqlite3.Database(cacheDbPath, sqlite3.OPEN_READONLY, function(err){
					if (err) {
						reject(err);
					} else {
						db3.get(stmt, [], function(err, row) {
							if (err) {
								reject(err);
							} else {
								if (row) {
									var myreg = new RegExp(regexBaseDir, "g");
									var matches = myreg.exec(row.Value);
									var match = matches[1];

									resolve(match);
								}
							}
						});
					}
				});
			});

		}
	}
};
