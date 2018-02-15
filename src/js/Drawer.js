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
      currentStyles : 'drawerMain inital',
      display       : 'BasicView'
    };

    this.handleKeys            = _handleKeys.bind(this);
    this.drawerStyles          = _drawerStyles.bind(this);
    this.contentSectionHandler = _contentSectionHandler.bind(this);
    this.titleSectionHandler   = _titleSectionHandler.bind(this);
    this.drawerHandler         = props.drawerHandler.bind(this);

  }

  getChildContext() {
    return { basicViewClickHandler: e => this.contentSectionHandler(e) };
  }

  componentWillReceiveProps(nextProps) {

    const { position, drawerOpen } = this.props;

    if(nextProps.drawerOpen !== drawerOpen) {
      this.drawerStyles(position, drawerOpen);

      if(nextProps.drawerOpen) {
        // cache triggering element...
        this.setState({initiatingElement:document.activeElement});

        // set focus to close button in drawer...
        if(this.titleSection) {
          console.log(this.titleSection)
          this.titleSection.focus();
        }

      }





    }

  }

  render() {

    const { position, children, drawerOpen, drawerHandler, headerTitle } = this.props;
    const { back, currentStyles, display } = this.state;

    return (
      <div role="dialog" tabIndex="0" className={currentStyles} onKeyDown={this.handleKeys}>
        <TitleSection
          sectionTitle        = {headerTitle}
          iconClose           = {drawerHandler}
          back                = {back}
          titleSectionHandler = {this.titleSectionHandler}
          closeButtonRef      = {el => this.titleSection = el}/>
        <ContentSection back={back} display={display} contentSectionHandler={this.contentSectionHandler}>
          {children}
        </ContentSection>
      </div>
    )
  }

}


export default Drawer;


Drawer.childContextTypes = {
  basicViewClickHandler : PropTypes.func
};


function _handleKeys(e) {
  switch(e.which) {
    case 27: this.drawerHandler(); break;   // ---> ESC KEY
    default: console.log("events default");
  }
}

function _drawerStyles(position, drawerOpen) {

  let currentStyles;

  switch(position) {
    case "left" : currentStyles = drawerOpen ? "drawerMain left slideOutLeft" : "drawerMain left slideInLeft"; break;
    case "right": currentStyles = drawerOpen ? "drawerMain right slideOutRight" : "drawerMain right slideInRight"; break;
    default: console.log("drawerStyles default case check position on Drawer");
  }

  this.setState({currentStyles});

}

function _contentSectionHandler(e) {

  if(e.currentTarget.attributes['maptodetail']) {
    this.setState({back:true, display:e.currentTarget.attributes['maptodetail'].value});
  }

}

function _titleSectionHandler() {
  this.setState({back:false});
}
