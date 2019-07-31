import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
    <style global jsx>{`
      p{
        font-size: 20px;
        padding-left: 25px;
        padding-top: 20px;
      }
      button {
        margin-left: 20px;
        height: 30px;
        width: 70px;
      }
            
            `}</style>
    <p>Do you want to add a new Keg?</p>
    <button onClick={props.onConfirmationAdd}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onConfirmationAdd: PropTypes.func
};

export default ConfirmationQuestions;