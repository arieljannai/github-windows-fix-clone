module.exports = {
	cachedb		: {
		filename	: 'cache.db',
		statement	: 'select Value from CacheElement where Key = "__UserSettings__"',
		regex		: 'BaseRepositoryDirectory.*?\\u0000(..\\\\.*?)\\u0000'
	},
	reg	: {
		githubPath : 'HKCU\\SOFTWARE\\Classes\\github-windows\\shell\\open\\command',
		backupName : 'Backup',
		backupGhPathObject : {
			'HKCU\\SOFTWARE\\Classes\\github-windows\\shell\\open\\command' : {
				'Backup' : {
					value	: '',
					type	: 'REG_SZ' } } },
		regexSplit : /[\"]/
	}
}
