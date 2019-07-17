import React from 'react';
import PropTypes from 'prop-types';

function NewKegsForm(props){
  let _brand = null;
  let _name = null;
  let _price = null;
  
  function handleNewKegsFormSubmission(event){
    event.preventDefault();
    props.onNewKegsCreation({brand: _brand.value, name: _name.value, price: _price.value});
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

NewKegsForm.propTypes = {
  onNewKegsCreation: PropTypes.func
};

export default NewKegsForm;