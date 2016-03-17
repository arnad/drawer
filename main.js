/*global require, module*/
'use strict';

// bundled styling
require('./main.scss');

var Drawer = require('./src/js/Drawer');

var constructAll = function () {
	Drawer.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

module.exports = Drawer;
