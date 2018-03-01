import ReactDOM from 'react-dom';
import React    from 'react';

import { Drawer, BasicView, DetailView } from '../index';


document.body.addEventListener('o.InitComponent', e => {
  ReactDOM.render(
    React.createElement(Drawer, e.detail.props, e.detail.props.children)
    , document.getElementById(e.detail.elementId)
  );
});
