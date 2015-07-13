/*global require, module*/
'use strict';

var Drawer = require('./src/js/Drawer');

var constructAll = function () {
	Drawer.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

module.exports = Drawer;