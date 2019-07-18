import React from 'react';
import Kegs from './Kegs';
import PropTypes from 'prop-types';


function KegsList(props){

  return (
    <div>
      <hr/>
      {props.kegsList.map((kegs, index) =>
        <Kegs name={kegs.name}
          brand={kegs.brand}
          price={kegs.price}
          currentRouterPath={props.currentRouterPath}
          key={index}
          onKegSelection={props.onKegSelection}/>
      )}
    </div>
  );
}
KegsList.propTypes = {
  kegsList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegsList;
