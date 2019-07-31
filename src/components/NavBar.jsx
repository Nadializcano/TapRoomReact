import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <style global jsx>{`
      #bar {
        padding: 10px;
        padding-right: 30px;
        background-color: #4C4B4B;
        color: white;
        font-size: 20px;
        text-align: right;
        margin: 20px
      }
                  
            `}</style>
      <div id="bar"> 
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> | <Link to="/newkegs" style={{ textDecoration: 'none', color: 'white' }}>Add Kegs</Link> | <Link to="/admin" style={{ textDecoration: 'none', color: 'white' }}>Admin</Link>
             
      </div>
    </div>
  );
}

export default NavBar;