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
      displayView   : 'BasicView',
      timer         : ''
    };

    this.drawerHandleKeys        = _drawerHandleKeys.bind(this);
    this.drawerStyles            = _drawerStyles.bind(this);
    this.contentSectionHandler   = _contentSectionHandler.bind(this);
    this.titleSectionBackHandler = _titleSectionBackHandler.bind(this);
    this.tabHandler              = _tabHandler.bind(this);
    this.findAndFocus            = _findAndFocus.bind(this);
    this.basicViewKeyHandler     = _basicViewKeyHandler.bind(this);
    this.applyWrapper            = _applyWrapper.bind(this);
    this.removeWrapper           = _removeWrapper.bind(this);
    this.drawerOpenClose         = _drawerOpenClose.bind(this);
    this.drawerHandler           = props.drawerHandler.bind(this);

    if(props.basicViewClick){
      this.basicViewClick = props.basicViewClick.bind(this);
    }

  }

  getChildContext() {
    return {
             basicViewClickHandler: e  => this.contentSectionHandler(e),
             basicViewKeyHandler  : e  => this.basicViewKeyHandler(e)
           };
  }

  componentWillReceiveProps(nextProps) {

    const { drawerOpen, skipTo, id, drawerTop } = nextProps;
    const { initiatingElement, back, timer } = this.state;

    this.drawerStyles(this.props.position, drawerOpen);
    this.drawerOpenClose(drawerOpen, skipTo, id, drawerTop, initiatingElement, back, timer);

  }

  render() {

    const { children, drawerHandler, text, skipTo, id, drawerOpen } = this.props;
    const { back, currentStyles, displayView } = this.state;

    return (
      <div id={id} role="dialog" className={currentStyles} aria-describedby="headerTitleSR" aria-labelledby={id} onKeyDown={this.drawerHandleKeys}>
        <TitleSection
          drawerOpen  = {drawerOpen}
          back        = {back}
          text        = {text}
          iconClose   = {drawerHandler}
          backHandler = {this.titleSectionBackHandler} />
        <ContentSection drawerOpen={drawerOpen} back={back} displayView={displayView} skipTo={skipTo} contentSectionHandler={this.contentSectionHandler}>
          {children}
        </ContentSection>
      </div>
    )
  }

}


export default Drawer;


Drawer.defaultProps = {
  position   : "right",
  drawerOpen : false,
  drawerTop  : "61px",
  text       : {
                 headerTitle       : "Basic Title",
                 closeButtonSRText : "Close",
                 backButtonText    : "Back"
               }
};

Drawer.childContextTypes = {
  basicViewClickHandler : PropTypes.func,
  basicViewKeyHandler   : PropTypes.func
};

Drawer.propTypes = {
  text          : PropTypes.object.isRequired,
  position      : PropTypes.string.isRequired,
  drawerOpen    : PropTypes.bool.isRequired,
  drawerHandler : PropTypes.func.isRequired,
  drawerTop     : PropTypes.string,
  tagManager    : PropTypes.func
};


function _drawerHandleKeys(e) {

  const allow = [27,9];
  if(allow.some(num => num === e.which)) {
    switch(e.which) {
      case 27: this.drawerHandler(); break; // ---> ESC KEY
      case 9 : this.tabHandler(e);   break; // ---> TAB KEY
      default: console.log("_drawerHandleKeys default");
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

  if(this.basicViewClick){
    this.basicViewClick(e);
  }

  if(e.currentTarget.attributes['maptodetail']) {
    this.setState({back:true, currentTab:0, displayView:e.currentTarget.attributes['maptodetail'].value},
      () => this.findAndFocus(this.props.drawerOpen, this.state.initiatingElement, this.state.back)
    );
  }

}

function _findAndFocus(drawerOpen, initiatingElement, back) {

  const closeButton    = document.querySelector('.iconWrapper .pe-icon--btn');
  const backButton     = document.querySelector('.titleSectionHeaderBackButton');
  const focusClose     = drawerOpen ? closeButton : initiatingElement;
  const focusBack      = drawerOpen ? backButton  : initiatingElement;
  const focusedElement = back ? focusBack : focusClose;

  if(focusedElement) {
    focusedElement.focus();
  }

}

function _titleSectionBackHandler(e) {

  e.preventDefault();
  e.stopPropagation();

  this.setState({back:false});
  document.querySelector('.iconWrapper .pe-icon--btn').focus();
}

function _tabHandler(e) {

  e.preventDefault();

  const drawerElement    = document.getElementsByClassName('drawerMain')[0];
  const tabsInsideDrawer = drawerElement.querySelectorAll('.titleSectionHeaderBackButton,.iconWrapper .pe-icon--btn, [tabindex="-1"], [tabindex="0"], detail, summary, button, input');
  const numOfTabs        = tabsInsideDrawer.length - 1;
  let currentTab         = this.state.currentTab;

  if(currentTab <= numOfTabs) {
    currentTab = e.shiftKey ? --currentTab : ++currentTab;
    currentTab = (currentTab >= 0) ? currentTab : 0;
  }

  if(currentTab > numOfTabs) {
    currentTab = 0;
  }

  tabsInsideDrawer[currentTab].focus();

  this.setState({currentTab});

}

function _basicViewKeyHandler(e) {

  const allow = [32,13];
  if(allow.some(num => num === e.which)) {
    switch(e.which) {
      case 32: this.contentSectionHandler(e); break;  // ---> SPACE KEY
      case 13: this.contentSectionHandler(e); break;  // ---> ENTER KEY
      default: console.log("_basicViewKeyHandler default");
    }
  }

}

function _applyWrapper() {
  if (!document.getElementById('wrapper')) {
    const wrapper = document.createElement('div');
    wrapper.id    = 'wrapper';
    wrapper.setAttribute('aria-hidden', true);

    const excludedElement = document.getElementById(this.props.id);

    while (document.body.firstChild) {
      wrapper.appendChild(document.body.firstChild);
    }

    document.body.appendChild(wrapper);
    document.body.appendChild(excludedElement);
  }
}

function _removeWrapper() {
  const wrapper = document.getElementById('wrapper');
  if (!wrapper) { return; }

  wrapper.setAttribute('aria-hidden', false);

  const excludedElement = document.getElementById(this.props.id);

  while (wrapper.firstChild) {
    document.body.appendChild(wrapper.firstChild);
  }

  document.body.removeChild(wrapper);
  document.body.appendChild(excludedElement);
}

function _drawerOpenClose(drawerOpen, skipTo, id, drawerTop, initiatingElement, back, timer) {

  if(!drawerOpen) {
    this.removeWrapper();
    this.findAndFocus(drawerOpen, initiatingElement, back);
    document.body.removeAttribute('style');
    const timer = setTimeout(() => document.getElementById(id).setAttribute('style','display:none;'),1500);
    this.setState({currentTab:0,timer});
  }

  if(drawerOpen) {
    window.clearTimeout(timer);
    this.setState({initiatingElement:document.activeElement, back: skipTo ? false : back},
      () => this.findAndFocus(drawerOpen, initiatingElement, back)
    );
    document.body.style = 'overflow:hidden';
    document.getElementById(id).setAttribute('style',`height:calc(100vh - ${drawerTop});top:${drawerTop}`);
    this.applyWrapper();
  }

}
