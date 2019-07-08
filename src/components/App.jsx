import React from 'react';
import KegsList from './KegsList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style global jsx>{`
            
            `}</style>
            <Header/>
      <KegsList/>

    </div>
  );
}

export default App;