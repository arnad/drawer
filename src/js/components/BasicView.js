import React      from 'react';
import PropTypes  from 'prop-types';
import { Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';

export const BasicView = ({children, mapToDetail, myKind}, context) => (
      <li tabIndex='0' role='presentation' mykind={myKind} maptodetail={mapToDetail} onClick={context.basicViewClickHandler} onKeyDown={context.basicViewKeyHandler}>
        {children}
      </li>
    )

BasicView.contextTypes = {
  basicViewClickHandler: PropTypes.func,
  basicViewKeyHandler  : PropTypes.func
};
