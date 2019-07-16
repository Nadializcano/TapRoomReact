import React from 'react';

class NewKegsControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  
  handleclick(){
    this.setState({formVisibleOnPage: true});
  }
  render(){
    return (
      <div>
      <p>test</p>
      <strong onClick={this.handleclick}>Click</strong>
      </div>
    );
  }
}

export default NewKegsControl;