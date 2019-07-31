import React from 'react';
import beer from '../assets/images/beer.jpeg';

function Header(){
  return (

    <div>
      <style global jsx>{`
        h1{
          text-align: left;
          padding-left: 30px;
        }
        
        img{
          float: center;
          width: 700px;
          height: 300px;
          margin: 370px;
          margin-top: 10px;
          margin-bottom: 5px;
          padding-top: 0px;
        }
              
              `}</style>
              
      <h1>Lars's Tap Room</h1>
      <img src={beer} />
    </div>
  );
}

export default Header;