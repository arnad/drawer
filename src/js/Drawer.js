import React, { Component } from 'react';
import { TitleSection }     from './components/TitleSection';
import { ContentSection }   from './components/ContentSection';

import '../scss/Drawer.scss';


class Drawer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      back          : false,
      currentStyles : 'drawerMain inital',
      display       : "BasicView"
    };

    this.handleKeys            = _handleKeys.bind(this);
    this.drawerStyles          = _drawerStyles.bind(this);
    this.contentSectionHandler = _contentSectionHandler.bind(this);
    this.titleSectionHandler   = _titleSectionHandler.bind(this);
    this.drawerHandler         = props.drawerHandler.bind(this);

  }

  componentWillReceiveProps(nextProps) {

    const { position, drawerOpen } = this.props;

    if(nextProps.drawerOpen !== drawerOpen) {
      this.drawerStyles(position, drawerOpen);
    }

  }

  render() {

    const { position, children, drawerOpen, drawerHandler } = this.props;
    const { back, currentStyles, display } = this.state;

    return (
      <div tabIndex="0" className={currentStyles} onKeyDown={this.handleKeys}>
        <TitleSection sectionTitle="Drawer Title" iconClose={drawerHandler} back={back} titleSectionHandler={this.titleSectionHandler}/>
        <ContentSection back={back} display={display} contentSectionHandler={this.contentSectionHandler}>
          {children}
        </ContentSection>
      </div>
    )
  }

}


export default Drawer;


function _handleKeys(e) {
  console.log("hit esc")
    switch(e.which) {
      case 27: this.drawerHandler(); break;   // ---> ESC KEY
      default: console.log("events default");
    }
}

function _drawerStyles(position, drawerOpen) {

  let currentStyles = drawerOpen ? "drawerMain left slideOutLeft" : "drawerMain left slideInLeft";

  if(position === 'right') {
    currentStyles = drawerOpen ? "drawerMain right slideOutRight" : "drawerMain right slideInRight";
  }

  this.setState({currentStyles});

}

function _contentSectionHandler(display) {
  console.log('===================='+ display)
  this.setState({back:true, display});
}

function _titleSectionHandler() {
  this.setState({back:false})
}
