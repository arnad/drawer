import React, { Component } from 'react';
import { Drawer, BasicView, DetailView } from '../index';
import { Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';

import './DrawerDemoPage.scss';


class DrawerDemoPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      drawerIsOpen : false,
      position     : "left"
    };

    this.drawerHandler = _drawerHandler.bind(this);

  }


  render(){

    const { drawerIsOpen, position } = this.state;

    return(
      <div role="main">

        <div className="demo-container">
          <div className="header">
            <h1>Drawer Demo:</h1>
            <div className="multi-dd-wrapper">
            </div>
          </div>
        </div>


        <div className="propsBlock">
          <h2>Props:</h2>
          <h3>Drawer:</h3>
          <ul>
            <li>drawerOpen    : Boolean default false</li>
            <li>headerTitle   : String Title Section</li>
            <li>position      : String one of:"left","right" default "left"</li>
            <li>drawerHandler : Function sets state of drawerOpen to true or false</li>
          </ul>
          <h3>BasicView:</h3>
          <ul>
            <li>mapToDetail : String DetailView to be shown, maps to DetailView id.</li>
            <li>myKind      : String one of:"BasicView","DetailView"</li>
          </ul>
          <h3>DetailView:</h3>
          <ul>
            <li>id     : String BasicView that produces DetailView on click id maps to mapToDetail.</li>
            <li>myKind : String one of:"BasicView","DetailView"</li>
          </ul>
        </div>

        <Button btnType="cta" btnSize="xlarge" onClick={() => {this.setState({drawerIsOpen:!drawerIsOpen})}}>Toggle Drawer</Button>
        <br />
        <br />
        <Button btnType="primary" btnSize="xlarge" onClick={() => {this.setState({position:"right"})}}>Drawer Position Right</Button>
        <br />
        <br />
        <Button btnType="primary" btnSize="xlarge" onClick={() => {this.setState({position:"left"})}}>Drawer Position Left</Button>


        <Drawer
          drawerOpen    = {drawerIsOpen}
          position      = {position}
          headerTitle   = "Basic Title"
          drawerHandler = {this.drawerHandler}>
          <div>
            <BasicView mapToDetail='detailView1' myKind="BasicView">
              <h2>BasicView1</h2>
              <ul>
                <li>hi</li>
                <li>there</li>
              </ul>
            </BasicView>
            <BasicView  myKind="BasicView">
              <h2>BasicView2</h2>
            </BasicView>
            <DetailView id='detailView1' myKind="DetailView">
              <h3>DetailView1</h3>
            </DetailView>

          </div>
        </Drawer>


      </div>
    )
  }

}


export default DrawerDemoPage;


function _drawerHandler() {
  this.setState({drawerIsOpen:!this.state.drawerIsOpen});
}
