/*global describe, it*/
'use strict';

var expect = require('expect.js');

var Drawer = require('./../src/js/Drawer');

function isExpanded(element) {
	return element.classList.contains('o-drawer-open') &&
		element.getAttribute('aria-expanded') === 'true';
}

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

	describe('Drawer.destroy()', function () {

		var bodyDelegate;

		before(function () {
			bodyDelegate = Drawer.bodyDelegate;
		});

		after(function () {
			Drawer.bodyDelegate = bodyDelegate;
		});

		it('should destroy', function () {
			var destroyed = false;
			Drawer.bodyDelegate = {
				destroy: function () { destroyed = true; }
			};

			Drawer.destroy();

			expect(destroyed).to.be(true);
		});

	});


	describe('open()', function() {
		it('should show the element', function () {
			var element = document.createElement('div');
			document.body.appendChild(element);

			var drawer = new Drawer(element);

			expect(isExpanded(element)).to.be(false);

			drawer.open();

			expect(isExpanded(element)).to.be(true);
		});

		it('should emit oDrawer.open', function (done) {
			var element = document.createElement('div');
			document.body.appendChild(element);

			var drawer = new Drawer(element);

			element.addEventListener('oDrawer.open', function (e) {
				expect(e.target).to.be(element);
				done();
			});

			drawer.open();
		});
	});

	describe('close()', function() {
		it('should hide the element', function () {
			var element = document.createElement('div');
			document.body.appendChild(element);

			var drawer = new Drawer(element);
			drawer.open();
			drawer.close();

			expect(isExpanded(element)).to.be(false);
		});

		it('should emit oDrawer.close', function (done) {
			var element = document.createElement('div');
			document.body.appendChild(element);

			var drawer = new Drawer(element);

			element.addEventListener('oDrawer.close', function (e) {
				expect(e.target).to.be(element);
				done();
			});

			drawer.close();
		});
	});

	describe('toggle()', function() {
		it('should toggle the element open and close', function () {
			var element = document.createElement('div');
			document.body.appendChild(element);

			var drawer = new Drawer(element);
			drawer.toggle();
			expect(isExpanded(element)).to.be(true);
			drawer.toggle();
			expect(isExpanded(element)).to.be(false);
		});
	});
});
