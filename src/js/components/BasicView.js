import PropTypes from 'prop-types';

export const BasicView = ({children, mapToDetail, myKind}, context) => (
      <div tabIndex="0" mykind={myKind} maptodetail={mapToDetail} onClick={context.basicViewClickHandler}>
        {children}
      </div>
    )

BasicView.contextTypes = { basicViewClickHandler: PropTypes.func };
