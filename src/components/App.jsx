import React from 'react';
import KegsList from './KegsList';
import Header from './Header';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';
import NewKegsForm from './NewKegsForm';

function App(){
  return (
    <div>
      <style global jsx>{`
            
            `}</style>
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={KegsList} />
        <Route exact path='/newkegs' component={NewKegsForm} />
      </Switch>
      

    </div>
  );
}

export default App;