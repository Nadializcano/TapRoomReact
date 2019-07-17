import React from 'react';
import KegsList from './KegsList';
import Header from './Header';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';
import NewKegsControl from './NewKegsControl';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      availableKegsList: []
    };
    this.handleAddingNewKegsToList = this.handleAddingNewKegsToList.bind(this);
  }
  
  handleAddingNewKegsToList(newKegs){
    var newAvailableKegsList = this.state.availableKegsList.slice();
    newAvailableKegsList.push(newKegs);
    this.setState({availableKegsList: newAvailableKegsList});
  }
  
  render(){
  return (
    <div>
      <style global jsx>{`
            
            `}</style>
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path='/' render={()=><KegsList kegsList={this.state.availableKegsList} />} />
        <Route exact path='/newkegs' render={()=><NewKegsControl onNewKegsCreation={this.handleAddingNewKegsToList} />} />
      </Switch>
      

    </div>
  );
}
}

export default App;