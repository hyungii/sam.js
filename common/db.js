var promise = require('bluebird');
var options = {
		promiseLib: promise
};
var pgp = require('pg-promise')(options);

module.exports = function(host, port, database, user, password) {

	var cn = {
			host: host,
			port: port,
			database: database,
			user: user,
			password: password
	};

	var db = pgp(cn);

	return db;
}

