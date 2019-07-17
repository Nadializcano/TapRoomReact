import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegsForm from './NewKegsForm';
import PropTypes from 'prop-types';

class NewKegsControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmationAdd = this.handleConfirmationAdd.bind(this);
  }
  
  handleConfirmationAdd(){
    this.setState({formVisibleOnPage: true});
  }
  render(){
      let currentlyVisibleContent = null;
      if(this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewKegsForm onNewKegsCreation={this.props.onNewKegsCreation} />;
      } else {
        currentlyVisibleContent = <ConfirmationQuestions onConfirmationAdd={this.handleConfirmationAdd} />;
      }
      return (
        <div>
        {currentlyVisibleContent}
        </div>
    );
  }
}

NewKegsControl.propTypes = {
  onNewKegsCreation: PropTypes.func
};

export default NewKegsControl;