import React from 'react';
import Kegs from './Kegs';
import PropTypes from 'prop-types';


function KegsList(props){

  return (
    <div>
      <hr/>
      <table>
      {Object.keys(props.kegsList).map(function(kegsId) {
        var kegs = props.kegsList[kegsId];
        return <Kegs name={kegs.name}
          brand={kegs.brand}
          price={kegs.price}
          currentRouterPath={props.currentRouterPath}
          key={kegsId}
          onKegSelection={props.onKegSelection}
          kegsId={kegsId}/>
      })}
      </table>
    </div>
  );
}
KegsList.propTypes = {
  kegsList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegsList;
