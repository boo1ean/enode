var controller = require('app-controller');
var log = require('./log');

// Set app-specific logger
controller.setLogger(log);

module.exports = controller;
