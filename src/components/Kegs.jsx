import React from 'react';
import PropTypes from 'prop-types';

function Kegs(props){
  const kegsInformation =
  return (
    <div>
      <style jsx>{`
        
        h2 {
          text-align: left;
          padding: 10px;
        }
        
        h3 {
          text-align: left;
          padding: 10px;
        }
        
        h4 {
          text-align: left;
          padding: 10px;
        }
            
      `}</style>
      <h2>{props.brand}</h2>
      <h3>{props.name}</h3>
      <h4>${props.price}</h4>
    </div>;
    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={() => }
      )
    }
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Kegs;