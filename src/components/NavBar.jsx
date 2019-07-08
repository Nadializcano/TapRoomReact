import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <style global jsx>{`
      #bar {
        padding: 10px;
        padding-left: 20px;
        background-color: #4C4B4B;
        color: white;
      }
      to="/" {
        color: white;
      }
            
            `}</style>
      <div id="bar"> 
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> | <Link to="/newkegs" style={{ textDecoration: 'none', color: 'white' }}>Add Kegs</Link>
             
      </div>
    </div>
  );
}

export default NavBar;