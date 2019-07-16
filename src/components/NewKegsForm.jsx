import React from 'react';

function NewKegsForm(){
  let _brand = null;
  let _name = null;
  let price = null;
  
  function handleNewKegsFormSubmission(event){
    event.preventDefault();
    _brand.value = '';
    _name.value = '';
    _price.value = '';
    
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