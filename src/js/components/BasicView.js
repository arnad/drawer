import PropTypes from 'prop-types';

export const BasicView = ({children, mapToDetail, myKind}, context) => (
      <li tabIndex="0" mykind={myKind} maptodetail={mapToDetail} onClick={context.basicViewClickHandler}>
        {children}
      </li>
    )

BasicView.contextTypes = { basicViewClickHandler: PropTypes.func };
