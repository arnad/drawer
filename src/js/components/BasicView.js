import React      from 'react';
import PropTypes  from 'prop-types';
import { Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';

export const BasicView = ({children, mapToDetail, myKind}, {basicViewClickHandler, basicViewKeyHandler}) => (
    <li tabIndex='0' role='link' mykind={myKind} maptodetail={mapToDetail} onClick={basicViewClickHandler} onKeyUp={basicViewKeyHandler}>
      {children}
    </li>
  )

BasicView.contextTypes = {
  basicViewClickHandler: PropTypes.func,
  basicViewKeyHandler  : PropTypes.func
};
