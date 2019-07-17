import React from 'react';
import PropTypes from 'prop-types';
import KegsList from './KegsList';

function Admin(props){
  return (
    <div>
    <h2>Test</h2>
    <KegsList kegsList={props.kegsList}
    currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  kegsList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;