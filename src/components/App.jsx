import React from 'react';
import KegsList from './KegsList';
import Header from './Header';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';
import NewKegsControl from './NewKegsControl';
import Admin from './Admin';
import { v4 } from 'uuid';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      availableKegsList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegsToList = this.handleAddingNewKegsToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }
  
  handleAddingNewKegsToList(newKegs){
    var newKegsId = v4();
    var newAvailableKegsList = Object.assign({}, this.state.availableKegsList, {
      [newKegsId]: newKegs
    });
    this.setState({availableKegsList: newAvailableKegsList});
  }
  
  handleChangingSelectedKeg(kegsId){
    this.setState({selectedKeg: kegsId});
    
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
        <Route path='/admin' render={(props)=><Admin kegsList={this.state.availableKegsList} currentRouterPath={props.location.pathname} 
        onKegSelection={this.handleChangingSelectedKeg}
        selectedKeg={this.state.selectedKeg} />} />
        </Switch>
      

    </div>
  );
}
}

export default App;