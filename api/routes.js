var controller = require('../framework/controller');

var index = controller(require('./controllers/index'));
var users = controller(require('./controllers/users'));

module.exports = function () {
	this.get('/users', users.query);
	this.all('*', index.index);
};
