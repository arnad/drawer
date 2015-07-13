/*global describe, it*/
'use strict';

var expect = require('expect.js');

var Drawer = require('./../src/js/Drawer');

describe('Drawer', function() {

	it('should initialise', function() {
		expect(new Drawer(document.body)).to.not.be(undefined);
	});

	it('should throw when called without \'new\'', function () {
		expect(function () { Drawer(); }).to.throwException(function (e) { // jshint ignore:line
			expect(e).to.be.a(TypeError);
			expect(e.message).to.match(/constructor requires \'new\'/);
		});
	});

	it('should throw when no arguments are provided', function () {
		expect(function () { new Drawer(); }).to.throwException(function (e) {
			expect(e).to.be.a(TypeError);
			expect(e.message).to.match(/missing required argument/);
		});
	});

	it('should accept a string argument', function () {
		new Drawer('body');
	});

	describe('Drawer.init()', function(){
		before(function () {
			var element1 = document.createElement('div');
			element1.setAttribute('data-o-component', 'o-drawer');
			document.body.appendChild(element1);

			var element2 = document.createElement('div');
			element2.setAttribute('data-o-component', 'o-drawer');
			document.body.appendChild(element2);
		});

		it('should init all collapsible elements', function () {
			var collapsibles = Drawer.init();
			expect(collapsibles.length).to.be(2);
		});

		it('should work when element is a selector', function () {
			var collapsibles = Drawer.init('body');
			expect(collapsibles.length).to.be(2);
		});
	});
});
