import React from 'react';
import PropTypes from 'prop-types';

function KegsDetail(props){
  return (
    <div>
    <style jsx>{`
        
    `}</style>
  
    <h3>Keg's Pints Available</h3>
    <h4>{props.selectedKeg.pints} pints Available</h4>
    </div>

  );
}

KegsDetail.propTypes = {
  selectedKeg: PropTypes.object
};
export default KegsDetail;