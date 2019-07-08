import React from 'react';
import KegsList from './KegsList';
import Header from './Header';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style global jsx>{`
            
            `}</style>
      <Header/>
      <Switch>
      <Route exact path='/' component={KegsList} />
      </Switch>
      <NavBar/>
      <KegsList/>
      

    </div>
  );
}

export default App;