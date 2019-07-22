import React from 'react';
import PropTypes from 'prop-types';
import KegsList from './KegsList';
import KegsDetail from './KegsDetail'; 

function Admin(props){
  let optionalSelectedKegContent = null;
  if(props.selectedKeg != null){
    optionalSelectedKegContent = <KegsDetail selectedKeg={props.kegsList[props.selectedKeg]} />
  }
  return (
    <div>
    {optionalSelectedKegContent}
    <KegsList kegsList={props.kegsList}
    currentRouterPath={props.currentRouterPath}
    onKegSelection={props.onKegSelection} />
    </div>
  );
}

Admin.propTypes = {
  kegsList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Admin;