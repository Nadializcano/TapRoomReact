import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewKegsControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleclick(){
    this.setState({formVisibleOnPage: true});
  }
  render(){
    return (
      <ConfirmationQuestions />
    );
  }
}

export default NewKegsControl;