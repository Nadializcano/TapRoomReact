import React from 'react';

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
        <h4>Beer Available on Tap</h4>      
      </div>
    </div>
  );
}

export default NavBar;