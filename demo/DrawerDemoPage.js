import React, { Component } from 'react';
import { Drawer, BasicView, DetailView } from '../index';
import { Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';

import './DrawerDemoPage.scss';


class DrawerDemoPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      drawerIsOpen:false,
      position:"left"
    };

    this.drawerHandler = _drawerHandler.bind(this);

  }


  render(){

    const { drawerIsOpen, position } = this.state;

    return(
      <div>

        <div className="demo-container">
          <div className="header">
            <h1>Drawer Demo:</h1>
            <div className="multi-dd-wrapper">
            </div>
          </div>
        </div>


        <div className="propsBlock">
          <h2>Props:</h2>
          <ul>
            <li>drawerOpen: Boolean default false</li>
            <li>position: String one of:"left","right" default "left"</li>
          </ul>
        </div>

        <Button btnType="cta" btnSize="xlarge" onClick={() => {this.setState({drawerIsOpen:!drawerIsOpen})}}>Toggle Drawer</Button>
        <br />
        <br />
        <Button btnType="primary" btnSize="xlarge" onClick={() => {this.setState({position:"right"})}}>Drawer Position Right</Button>
        <br />
        <br />
        <Button btnType="primary" btnSize="xlarge" onClick={() => {this.setState({position:"left"})}}>Drawer Position Left</Button>



        <Drawer drawerOpen={drawerIsOpen} position={position} drawerHandler={this.drawerHandler}>
          <div className='viewWrapper'>
            <BasicView id='basicView1'>
              <h2>BasicView1</h2>
            </BasicView>
            <BasicView id='basicView2'>
              <h2>BasicView2</h2>
            </BasicView>
            <DetailView id='detailView1' detailViewFor='basicView1'>
              <h3>DetailView1</h3>
            </DetailView>
            <DetailView id='detailView2' detailViewFor='basicView2'>
              <h3>DetailView2</h3>
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
