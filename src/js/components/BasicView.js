import PropTypes from 'prop-types';

export const BasicView = ({children, mapToDetail}, context) => (
      <div tabIndex="0" maptodetail={mapToDetail} onClick={context.basicViewClickHandler}>
        {children}
      </div>
    )

BasicView.contextTypes = { basicViewClickHandler: PropTypes.func };
