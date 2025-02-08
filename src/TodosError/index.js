import React from 'react';
import './TodosError.css';

function TodosError(){

  return (
      <div className='container'>
        <div id='error-box'>
          <div className="dot"></div>
          <div className="dot two"></div>
          <div className="face2">
            <div className="eye"></div>
            <div className="eye right"></div>
            <div class="mouth sad"></div>
          </div>
          <div className="shadow move"></div>
          <div className="message">
            <h1 class="alert">Error!</h1>
            <p>oh no, something went wrong.</p>
            <p>Please, refresh the page.</p>
          </div>
        </div>
      </div>
      
    );
  }
  
  export { TodosError };