import React      from 'react';
import PropTypes  from 'prop-types';
import { Button } from '@pearson-components/elements-sdk/build/dist.elements-sdk';

export const BasicView = ({children, mapToDetail, myKind}, context) => (
      <li tabIndex='-1' role='presentation' mykind={myKind} maptodetail={mapToDetail} onClick={context.basicViewClickHandler}>
        {children}
      </li>
    )

BasicView.contextTypes = { basicViewClickHandler: PropTypes.func };
