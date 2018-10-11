[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/drawer.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/drawer)

## Drawer

The drawer component offers a convenient method for presenting secondary information which doesn't need to be immediately visible.

UX Framework Design Page:
[http://uxframework.pearson.com/c/drawer/](http://uxframework.pearson.com/c/drawer/)

Demo Page:
[http://pearson-higher-ed.github.io/drawer/](http://pearson-higher-ed.github.io/elements-sdk)

## Getting Started

Initial Machine Setup
Install Git.
Install Node 6.0.0 or greater - Need to run multiple versions of Node? Use nvm.
On a Mac? You're all set. If you're on Windows, complete the steps for your OS below.
On Windows:

Install Ruby as the runtime engine for SCSS.
Install Python 2.7. Some node modules may rely on node-gyp, which requires Python on Windows.
On Chrome browser:

Optionally, install React developer tools.

installing the component:
```javascript
npm install @pearson-components/drawer --save

yarn add @pearson-components/drawer
```
### Quick Start
```javascript
git clone https://github.com/Pearson-Higher-Ed/drawer.git
cd drawer
npm install
npm start
```
Navigate to http://localhost:8081/drawer/, where the spawned Node server hosts a webpack-generated SPA using React Router for defining how to render the components.

As you save changes to the source, the changes are automatically reloaded in the browser.

### Usage

To use the Drawer in a React.js page:

import the drawer and it's child views:
 ```javascript
	import { Drawer, BasicView, DetailView } from "@pearson-components/drawer";
 ```
then configure the drawer and it's views:

```javascript
this.state = {
	drawerTop    : "61px",
	drawerIsOpen : false,
	position     : "right",
	text         : {
			headerTitle       : "Basic Title",
			closeButtonSRText : "Close",
			backButtonText    : "Back"
		 }
};
```

```javascript
<Drawer
	drawerTop     = {this.state.drawerTop}
	drawerOpen    = {this.state.drawerIsOpen}
	position      = {this.state.position}
	text          = {this.state.text}
	drawerHandler = {this.drawerHandler}>
	<div>
		<BasicView mapToDetail='detailView1' myKind="BasicView">
			<h2>BasicView1</h2>
			<ul>
				<li>hi</li>
				<li>there</li>
			</ul>
		</BasicView>
		<BasicView myKind="BasicView">
			<h2>BasicView2</h2>
			<button>hithere</button>
		</BasicView>
		<BasicView mapToDetail='detailView3' myKind="BasicView">
			<h2>BasicView3</h2>
		</BasicView>
		<DetailView id='detailView1' myKind="DetailView">
			<h3>DetailView1</h3>
		</DetailView>
		<DetailView id='detailView3' myKind="DetailView">
			<details>
				<summary>Copyright 1999-2014.</summary>
				<p> - by Data. All Rights Reserved.</p>
				<p>All content and graphics on this web site are the property of the company  Data.</p>
			</details>
		</DetailView>
	</div>
</Drawer>
```

sample handler:
```javascript
_drawerHandler = () => {
  this.setState({drawerIsOpen:!this.state.drawerIsOpen});
}
```

BasicViews and DetailViews must be wrapped in a div.

BasicView and DetailView must both specify the prop myKind.

BasicView may specify a mapToDetail prop. This prop corresponds to a DetailView with the matching id. Clicking on the BasicView will start an animated transition to the DetailView with the corresponding id.

example:
```javascript
<BasicView mapToDetail='detailView1' myKind="BasicView">
	<h2>BasicView1</h2>
	<ul>
		<li>hi</li>
		<li>there</li>
	</ul>
</BasicView>
<DetailView id='detailView1' myKind="DetailView">
	<h3>DetailView1</h3>
</DetailView>
```
props for Drawer:
```javascript
position      : String   - one of:"left","right" default "right"
drawerTop     : String   - adjust drawer top property default "61px"
drawerOpen    : Boolean  - (required) default false default false
drawerHandler : Function - (required) sets state of drawerOpen to true or false
text          : Object   - (required) text to be passed in.
                            default {
                                      headerTitle       : "Basic Title",
                                      closeButtonSRText : "Close",
                                      backButtonText    : "Back"
  								  }
```

props for BasicView:
```javascript
mapToDetail : String - DetailView to be shown, maps to DetailView id.
myKind      : String - (required) one of:"BasicView","DetailView";
```

props for DetailView:

```javascript
id     : String - (required) BasicView that produces DetailView on click id maps to mapToDetail.
myKind : String - (required) one of:"BasicView","DetailView";
```

## Test
The project is wired to unit test with [Jest](https://facebook.github.io/jest/).

```javascript
npm test
```
After running npm test && npm start, you may view the code coverage site at: http://localhost:8081/coverage/lcov-report

## Event Instantiation
Non React Apps may use the event harness by pulling in the eventInterface from the build directory. To instantiate a component use this format:

```javascript
document.body.dispatchEvent(new CustomEvent('o.InitComponent', {
    detail: {
      elementId: 'drawer',
      props: {
        text: {
                headerTitle       : "Basic Title",
                closeButtonSRText : "Close",
                backButtonText    : "Back"
              },
        drawerOpen: true,
        position:"right",
				drawerTop:"61px",
				drawerHandler: () => {},
        children: React.createElement('div', {},
										React.createElement(BasicView,{mapToDetail:'detailView1',myKind:'BasicView'},
											React.createElement('p',{},'hi')
										),
										React.createElement(DetailView,{id:'detailView1',myKind:'DetailView'},
											React.createElement('p',{},'there')
										)
				  				)
      }
    }
  }
));
```


## External Dependencies
React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or available from a third-party CDN.

This component targets the styling in the Pearson Elements SDK.

### Polyfills
React components with internationalisation use React-Intl which relies on the ECMAScript Internationalisation API. This was not supported in Safari until version 10. If you are supporting Safari older than 10, there is a polyfill from Andy Earnshaw (see below).

CustomEvent support in IE is also polyfilled. Because many teams are supporting both IE 11 and Safari 9, we've combined the polyfills into a single script. The example below polyfills for CustomEvent and localisation for English and French:

<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent,Intl.~locale.en,Intl.~locale.fr"></script>
Be sure to include the above script (a version of it that makes sense for your project and supported browsers) on your HTML page running CompoundsSDK, if you need it. 

## CodeCoverage site
After running npm test && npm start, you may view the code coverage site at: http://localhost:8081/coverage/lcov-report

## Guidelines
All submissions must be via pull request and approved before the pearson-design-accelerator@pearson.com team will merge and allow it to enter the release process. All submissions must pass this project's linting, test with 100% code coverage, and be compatible with the version(s) of React approved for the Pearson User Experience Platform.

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
