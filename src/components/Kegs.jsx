import React from 'react';
import PropTypes from 'prop-types';

function Kegs(props){
  
  const kegsInformation =
  
    <div>
      <style jsx>{`
        table {
          border-collapse: collapse;
          width: 100%;
        }
        
        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        
        tr:hover {
          background-color: #f5f5f5;
        }
        
        
            
      `}</style>
      
  
      <table>
      <tr>
      <th>Brand</th>
      <th>Name</th>
      <th>Price</th>
      <th>Alcohol Content</th>
      </tr>

  <tr>
      <td>{props.brand}</td>
      <td>{props.name}</td>
      <td>${props.price}</td>
      <td>{props.alcoholContent}%</td>
      
    </tr>
      </table>
    </div>;
    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={() => {props.onKegSelection(props.kegsId);}}>
        {kegsInformation}
        </div>
      );
    } else {
      return (
        
        <div>
        {kegsInformation}
        </div>
      );
    }
    
}


Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegsId: PropTypes.string.isRequired
};

export default Kegs;