import React, { Component } from 'react';
//import ReactDOM             from 'react-dom';
import PropTypes            from 'prop-types';

class DrawerPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (this.props.renderTo) {
      this.target = document.getElementById(this.props.renderTo);
    }
    if (!this.target) {
      this.target = document.createElement('div');
      this.target.className = 'drawerTarget';
      document.body.appendChild(this.target);
      this.tempDivShouldBeCleanedUp = true;
    }

    this.target.appendChild(this.el);
  }

  componentWillUnmount() {
    this.target.removeChild(this.el);
    if (this.tempDivShouldBeCleanedUp) {
      document.body.removeChild(this.target);
    }
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default DrawerPortal;

DrawerPortal.propTypes = {
  renderTo    : PropTypes.string
};
