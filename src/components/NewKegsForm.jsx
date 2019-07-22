import React from 'react';
import PropTypes from 'prop-types';

function NewKegsForm(props){
  let _brand = null;
  let _name = null;
  let _price = null;
  let _alcoholContent = null;
  let _pints = null;
  
  function handleNewKegsFormSubmission(event){
    event.preventDefault();
    props.onNewKegsCreation({brand: _brand.value, name: _name.value, price: _price.value, alcoholContent: _alcoholContent.value, pints: _pints.value});
    _brand.value = '';
    _name.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pints.value = '';
    
  }
  return (
    <div>
    <style jsx>{`
      form {
        margin: 100px;
        margin-left: 300px;
        background: #C0C0C0;
        width: 700px;
        height: 700px;
        padding-left: 150px;
      }
      input {
        width: 400px;
        height: 30px;
        margin: 60px;
        margin-top: 10px;
        margin-bottom: 0px;
        background: #FFFFF0;
        
      }
      p{
        padding-left: 60px;
        padding-top: 20px;
        margin-top: 10px;
        
      }
      h2 {
        padding-left: 120px;
        padding-top: 30px;
        margin-top: 10px;
      }
      button {
        align: left;
      }
      `}
      </style>

      <form onSubmit={handleNewKegsFormSubmission}>
      <h2>Fill the form to add a new Keg!</h2>
        <p>Brand</p>
        <input 
          type='text'
          id='brand'
          ref={(input) => {_brand = input;}}/>
          <p>Name</p>
        <input
          type='text'
          id='name'
          ref={(input) => {_name = input;}}/>
          <p>Price</p>
        <input
          type='text'
          id='price'
          ref={(input) => {_price = input;}}/>
          <p>Alcohol Content</p>
          <input
            type='text'
            id='alcoholContent'
            ref={(input) => {_alcoholContent = input;}}/>
            <p>Pints amount</p>
            <input
              type='text'
              id='pints'
              ref={(input) => {_pints = input;}}/>
        <button type='submit'>Add!</button>    
      </form>
    </div>
  );
}

NewKegsForm.propTypes = {
  onNewKegsCreation: PropTypes.func
};

export default NewKegsForm;