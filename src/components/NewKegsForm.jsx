import React from 'react';

function NewKegsForm(){
  return (
    <div>
      <form onSubmit={handleNewKegsFormSubmission}>
        <input 
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='name'
          placeholder='Name'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <button type='submit'>Add!</button>    
      </form>
    </div>
  );
}

export default NewKegsForm;