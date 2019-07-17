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
          key={index}/>
      )}
    </div>
  );
}
KegsList.propTypes = {
  kegsList: PropTypes.array
};

export default KegsList;
