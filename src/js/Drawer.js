'use strict';

var DomDelegate = require('dom-delegate');
var WeakMap = require('weakmap');

var dispatchEvent = function(element, name, data) {
  if (document.createEvent && element.dispatchEvent) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);

    if (data) {
      event.detail = data;
    }

    element.dispatchEvent(event);
  }
};

function Drawer(el){
  if (!(this instanceof Drawer)){
    throw new TypeError('Constructor Drawer requires \'new\'');
  }
  if (!el){
    throw new TypeError('missing required argument: element');
  }
  if(typeof el == 'string'){
    el = document.querySelector(el);
  }

  var triggerSelector =
    '[data-toggle="o-drawer"][href="#' + el.id + '"],' +
    '[data-toggle="o-drawer"][data-target="#' + el.id + '"]';

  this.target = el;
  this.trigger = document.querySelectorAll(triggerSelector);
  Drawer.cache.set(el, this);

  this.target.classList.add('o-drawer');

  var hasAlignmentClass = this.target.classList.contains('o-drawer-left') ||
    this.target.classList.contains('o-drawer-right');

  if(!hasAlignmentClass){
    this.target.classList.add('o-drawer-left');
  }
  this.target.setAttribute('aria-expanded', false);

  if(!Drawer.delegate){
    var delegate = new DomDelegate(document.body);
    delegate.on('click', '[data-toggle="o-drawer"], [data-close="o-drawer"], [data-open="o-drawer"]', function handleClick(e) {
      e.preventDefault();


      var trigger = getTrigger(e.target);
      var target = getTargetFromTrigger(trigger);

      for(var i=0, l = target.length; i<l; i++){
        var t = target[i];
        var drawer = Drawer.cache.get(t);

        if (!drawer && t.getAttribute('data-o-component') === 'o-collapse') {
          drawer = new Drawer(t);
        }

        if (drawer) {
          var action = openCloseToggle(trigger);
          drawer[action]();
        }
      }
    });
    Drawer.delegate = delegate;
  }

  return this;
}

Drawer.cache = new WeakMap();

/**
 * Initializes all drawer elements on the page or within
 * the element passed in.
 * @param  {HTMLElement|string} element DOM element or selector.
 * @return {DropdownMenu[]} List of Drawer instances that
 * have been initialized.
 */
Drawer.init = function(element){
	var drawerEls = selectAll(element);
	var drawers = [];

	for(var i = 0, l = drawerEls.length; i < l; i++){
		drawers.push(new Drawer(drawerEls[i]));
	}

	return drawers;
};

/**
 * Destroy all Drawer Components on the page
 */
Drawer.destroy = function () {
  if (Drawer.bodyDelegate) {
    Drawer.bodyDelegate.destroy();
  }
}

/**
 * Opens the Drawer
 * @return {Drawer} self, for chainability
 */

Drawer.prototype.open = function(){
  this.target.classList.add('o-drawer-open');
  this.target.setAttribute('aria-expanded', true);
  dispatchEvent(this.target, 'oDrawer.open');
  return this;
}

/**
 * Closes the Drawer
 * @return {Drawer} self, for chainability
 */

Drawer.prototype.close = function(){
  this.target.classList.remove('o-drawer-open');
  this.target.setAttribute('aria-expanded', true);
  dispatchEvent(this.target, 'oDrawer.close');
  return this;
}

/**
 * Toggles the Drawer
 * @return {Drawer} self, for chainability
 */

Drawer.prototype.toggle = function(){
  this.target.classList.toggle('o-drawer-open');
  var visible = this.target.classList.contains('o-drawer-open');
  this.target.setAttribute('aria-expanded', visible);
  var evt = visible? 'oDrawer.open' : 'oDrawer.close';
  dispatchEvent(this.target, 'oDrawer.close');
  return this;
}


function selectAll(element){
	if(!element){
		element = document.body;
	}
  else if(!(element instanceof HTMLElement)){
		element = document.querySelectorAll(element)[0];
	}

	return element.querySelectorAll('[data-o-component="o-drawer"]');
}

function openCloseToggle(el) {
  if(el){
    if(el.getAttribute('data-toggle') == 'o-drawer'){
      return 'toggle';
    }
    else if(el.getAttribute('data-close') == 'o-drawer'){
      return 'close';
    }
    else if(el.getAttribute('data-open') == 'o-drawer'){
      return 'open';
    }
  }
  return false;
}

function getTrigger(element) {
  while (element && element.getAttribute('data-toggle') !== 'o-drawer' &&
          element.getAttribute('data-close') !== 'o-drawer' &&
          element.getAttribute('data-open') !== 'o-drawer') {
    element = element.parentElement;
  }

  return element;
}

function getTargetFromTrigger(element) {
  var target = element.getAttribute('data-target') || element.getAttribute('href');
  return document.querySelectorAll(target);
}

module.exports = Drawer;
