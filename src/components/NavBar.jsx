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
            
            `}</style>
      <div id="bar"> 
        <Link to="/">Home</Link> | <Link to="/newkegs">Add Kegs</Link>
             
      </div>
    </div>
  );
}

export default NavBar;