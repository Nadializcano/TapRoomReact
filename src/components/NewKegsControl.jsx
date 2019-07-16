import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegsForm from './NewKegsForm';

class NewKegsControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }
  
  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }
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