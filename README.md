<<<<<<< HEAD
# drawer [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/drawer.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/drawer) [![Coverage Status](https://coveralls.io/repos/Pearson-Higher-Ed/drawer/badge.svg?branch=master&service=github)](https://coveralls.io/github/Pearson-Higher-Ed/drawer?branch=master)

## Demo

	npm install
	npm start

Navigate to **localhost:8081/demo** in your favorite browser.

## Usage

The drawer component can be added to any project via NPM install:

  npm install --save @pearson-components/Drawer

or can be added via script tag include (via unpkg.com):

```HTML
<script type="text/javascript" src="https://unpkg.com/@pearson-components/drawer@1.0.3/build/dist.drawer.js"></script>
```

Add `data-o-component="o-drawer"` to the target element to enable drawer. You can use a link with `href` or a button with `data-target` as the trigger:

```html
<a href="#drawer-example" data-toggle="o-drawer">Link trigger</a>
<button data-toggle="o-drawer" data-target="#drawer-example">Button trigger</button>

<div id="drawer-example" class="o-drawer-right o-drawer-animated" data-o-component="o-drawer">
  <button type="button" data-target="#drawer-example" data-close="o-drawer">
    <span class="pe-icon--times" aria-hidden="true"></span>
    <span class="pe-sr-only">close</span>
  </button>
  <p>Quisque in tortor finibus, dictum sem vel, convallis felis. Nunc ac mi in urna euismod eleifend in vitae augue. Suspendisse blandit feugiat vulputate. Praesent sit amet fringilla eros. Mauris nunc nisl, laoreet sit amet molestie vitae, sodales et diam.</p>
</div>
```

## Enabling using JavaScript

```js
new Drawer(document.querySelector('#myDrawer'));
```

You can use the static `init` method to initialize all drawer elements within a specified element:

```js
Drawer.init(document.body);
```

This module will also listen for the `o.InitAllDrawerElements` event; when fired, it will initialize all drawer elements on the page.

## API

### Constructor

`Drawer(element)`

Initializes a drawer element, where `element` is the target element and an instance of `HTMLElement`.

### Methods

`open()`

Expands the target element.

`close()`

Collapses the target element.

`toggle()`

Toggles the target element, depending on its current state.

### Events

| Event Name							 | Description																				 |
|--------------------------|-----------------------------------------------------|
| oDrawer.open						 | Fires immediately when the `open` method is called. |
| oDrawer.close						| Fires immediately when the `close` method is called. |

```js
document.querySelector('#myDrawer').addEventListener('oDrawer.open', function (e) {
	// Do something
});
```

## Accessibility

The Drawer treats keyboard focus similar to a modal dialog; when the Drawer is opened, focus is moved to the first focusable inside the Drawer (there should always be a closing button inside, ideally as the first element) and `aria-expanded` is set to true on the element which triggered the Drawer to open.

So long as the Drawer is open, focus is trapped inside and cycles until either the Drawer is closed by clicking an element with the matching  `data-close` attribute, or the ESC key is hit.

When the Drawer closes, if closed from within focus is brought back to the triggering element. Otherwise, focus is left on whichever other element was clicked. In both cases, `aria-expanded` is set back to false on the triggering element.

## Browser support

Tested and working on:

|	Browser	 | Versions									|
|:----------:|:----------------------:|
|	 Chrome	 |	 36+								  	 |
|	 Firefox	|	 30+									 |
|	 IE			 |	 11+								 |
|	 Edge			 |	 13.10586 							 |
|	 Safari			 |	 9 								 |


### Polyfills

Be aware that IE 11 does not support `CustomEvent`. If you want to use `CustomEvent` (as seen in `demo.js`), you will need to add the CustomEvent polyfill script to your HTML page:

```
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent"></script>
```

## Contributions

Please review the [guidelines](https://github.com/Pearson-Higher-Ed/docs/blob/master/origami-contributions.md) for contributing before getting started.

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
=======
## Origami Starter Kit [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/component-archetype.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/component-archetype)

This is a comprehensive starter kit for creating a standalone Origami component **(not an app starter kit)**. You 
should integrate your component into a larger application capable of managing data flow to all available components.

In order to utilize this successfully, you must have solid working knowledge of Facebook's React - a library for
building composable user interfaces. You should understand ES2015 (ES6) syntax and concepts as well.

This starter kit implements best practices like testing, linting, bundling, transpiling ES6 to ES5, etc. It codifies a
long list of decisions that you no longer have to make to get rolling. It saves you from the long, painful process of
wiring it all together into an automated development environment and build process.

## Public or Private?

Your first decision: Are you building a public (OSS) or private (internal only) component? By default, Origami
components are public unless it was decided otherwise in consultation with the Pearson Design Accelerator (PDA) team.

Requests to the PDA team must be sent to pearson-design-accelerator@pearson.com.

If you are building open source, the repo belongs in the **Pearson GitHub** organization. Send a request to be invited 
with all contributing developer GitHub usernames to the PDA team. You must accept the resulting email invitation to join.

If it is decided the repo belongs in **Pearson Bitbucket**, send a request to the PDA team for all contributing developers
 to be given write access to bitbucket.pearson.com/projects/PDA.

## Getting Started

1. Create your new repository as decided above, using the following naming convention:
    1. All lowercase characters, and hyphens instead of camel case.
    2. Do **not** use "component" in the name, as it is redundant.

2. Follow these [directions](https://help.github.com/articles/caching-your-github-password-in-git/#platform-all) to stop
 manually authenticating to GitHub on every network request. This enables the use of automated npm scripts.

3. Perform these steps in your development environment:  
	1. git clone https://github.com/Pearson-Higher-Ed/component-archetype.git `name-of-your-new-component`
	2. cd `name-of-your-new-component`
    3. git remote set-url origin `url-of-new-component-repository`
    4. git remote -v

4. Once you've verified that the remote origin now looks correct for your repo, do the initial push:

    git push -u origin master

## Ready to Develop

After completing the above steps, delete this README and rename [README.main.md](README.main.md) as "README.md" for
your project. You are ready to begin developing your component!
>>>>>>> chore: inital refactor
