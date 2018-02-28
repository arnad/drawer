import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { TitleSection }     from './components/TitleSection';
import { ContentSection }   from './components/ContentSection';

import '../scss/Drawer.scss';


class Drawer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      back          : false,
      currentTab    : 0,
      currentStyles : 'drawerMain initial',
      displayView   : 'BasicView'
    };

    this.handleKeys            = _handleKeys.bind(this);
    this.drawerStyles          = _drawerStyles.bind(this);
    this.contentSectionHandler = _contentSectionHandler.bind(this);
    this.titleSectionHandler   = _titleSectionHandler.bind(this);
    this.tabHandler            = _tabHandler.bind(this);
    this.findAndFocus          = _findAndFocus.bind(this);
    this.basicViewKeyHandler   = _basicViewKeyHandler.bind(this);
    this.drawerHandler         = props.drawerHandler.bind(this);
  }

  getChildContext() {
    return { basicViewClickHandler: e => this.contentSectionHandler(e),
             basicViewKeyHandler  : e => this.basicViewKeyHandler(e)
           };
  }

  componentWillReceiveProps(nextProps) {

    const { position, drawerOpen }    = nextProps;
    const { initiatingElement, back } = this.state;

    this.drawerStyles(position, drawerOpen);

    if(drawerOpen) {
      this.setState({initiatingElement:document.activeElement},
        () => this.findAndFocus(drawerOpen, initiatingElement, back)
      );
    }

    if(!drawerOpen) {
      this.findAndFocus(drawerOpen, initiatingElement, back);
      this.setState({currentTab:0});
    }

  }

  render() {

    const { position, children, drawerOpen, drawerHandler, text, drawerTop, drawerZ } = this.props;
    const { back, currentStyles, displayView } = this.state;

    const hasDrawerTop = drawerTop ? drawerTop : 0;

    return (
      <div role="dialog" className={currentStyles} style={{top:hasDrawerTop,zIndex:drawerZ}} aria-hidden={!drawerOpen} aria-live="polite" tabIndex="0" onKeyDown={this.handleKeys}>
        <TitleSection
          back                = {back}
          text                = {text}
          iconClose           = {drawerHandler}
          titleSectionHandler = {this.titleSectionHandler} />
        <ContentSection back={back} displayView={displayView} contentSectionHandler={this.contentSectionHandler}>
          {children}
        </ContentSection>
      </div>
    )
  }

}


export default Drawer;


Drawer.childContextTypes = {
  basicViewClickHandler : PropTypes.func,
  basicViewKeyHandler : PropTypes.func
};


function _handleKeys(e) {
  const allow = [27,9];
  if(allow.some(a => a === e.which)) {
    switch(e.which) {
      case 27: this.drawerHandler(); break;  // ---> ESC KEY
      case 9 : this.tabHandler(e);   break;  // ---> TAB KEY
      default: console.log("_handleKeys default");
    }
  }
}

function _drawerStyles(position, drawerOpen, currentStyles) {

  switch(position) {
    case "left" : currentStyles = drawerOpen ? "drawerMain left slideInLeft"   : "drawerMain left slideOutLeft";   break;
    case "right": currentStyles = drawerOpen ? "drawerMain right slideInRight" : "drawerMain right slideOutRight"; break;
    default: console.log("_drawerStyles default case check position on Drawer");
  }

  this.setState({currentStyles});

}

function _contentSectionHandler(e) {

  if(e.currentTarget.attributes['maptodetail']) {
    this.setState({back:true, currentTab:0, displayView:e.currentTarget.attributes['maptodetail'].value},
      () => this.findAndFocus(this.props.drawerOpen, this.state.initiatingElement, this.state.back)
    );
  }

}

function _findAndFocus(drawerOpen, initiatingElement, back) {

  const closeButton    = document.querySelector('.iconWrapper .pe-icon--btn');
  const backButton     = document.querySelector('.titleSectionHeaderBackspan button');
  const focusClose     = drawerOpen ? closeButton : initiatingElement;
  const focusBack      = back ? backButton : initiatingElement;
  const focusedElement = back ? focusBack : focusClose;

  focusedElement.focus();

}

function _titleSectionHandler() {
  this.setState({back:false});
  document.querySelector('.iconWrapper .pe-icon--btn').focus();
}

function _tabHandler(e) {

  e.preventDefault();

  const drawerElement    = document.getElementsByClassName('drawerMain')[0];
  const tabsInsideDrawer = drawerElement.querySelectorAll('.titleSectionHeaderBackspan .pe-icon--btn,.iconWrapper .pe-icon--btn, [tabindex="-1"], [tabindex="0"]');
  const numOfTabs        = tabsInsideDrawer.length - 1;
  let currentTab         = this.state.currentTab;
  let updatedTab;

  if(currentTab < numOfTabs){
    updatedTab = 0;
  }

  if(currentTab <= numOfTabs){
    updatedTab = e.shiftKey ? --currentTab : ++currentTab;
    updatedTab = (updatedTab >= 0) ? updatedTab : 0;
  }

  if(currentTab > numOfTabs){
    updatedTab = 0;
  }

  tabsInsideDrawer[updatedTab].tabIndex = 0;
  tabsInsideDrawer[updatedTab].focus();

  this.setState({currentTab:updatedTab});

}

function _basicViewKeyHandler(e) {
  const allow = [32];
  if(allow.some(a => a === e.which)) {
    switch(e.which) {
      case 32: this.contentSectionHandler(e); break;  // ---> SPACE KEY                              // ---> SPACE BAR
      default: console.log("_basicViewKeyHandler default");
    }
  }
}
