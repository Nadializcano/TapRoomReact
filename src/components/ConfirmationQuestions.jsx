import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
    <p>Do you want to add a new Keg?</p>
    <button onClick={props.onConfirmationAdd}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onConfirmationAdd: PropTypes.func
};

export default ConfirmationQuestions;