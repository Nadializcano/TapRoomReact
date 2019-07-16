import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegsForm from './NewKegsForm';

class NewKegsControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  
  // handleclick(){
  //   this.setState({formVisibleOnPage: true});
  //}
  render(){
      let currentlyVisibleContent = null;
      if(this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewKegsForm />;
      } else {
        currentlyVisibleContent = <ConfirmationQuestions />;
      }
      return (
        <div>
        {currentlyVisibleContent}
        </div>
    );
  }
}

export default NewKegsControl;