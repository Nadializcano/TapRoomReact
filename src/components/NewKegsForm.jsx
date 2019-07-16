import React from 'react';

function NewKegsForm(){
  function handleNewKegsFormSubmission(event){
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleNewKegsFormSubmission}>
        <input 
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Add!</button>    
      </form>
    </div>
  );
}

export default NewKegsForm;