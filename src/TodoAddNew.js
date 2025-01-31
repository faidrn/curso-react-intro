//import React from 'react';
import './TodoAddNew.css';

function TodoAddNew({
  searchValue, 
  setSearchValue
}){

  return (
    <div className='container-add-todo container-add-todo-hidden'>
        <div className='container-input-add-todo'>
            <input 
            placeholder="Type the task..." 
            className='input-add-todo' 
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
            />
            <button className="btn-add-todo btn-enabled"
                onClick={
                (event) => 
                    console.log('diste click')
                }
            >
                Add task
            </button>
        </div>
      </div>
      
    );
  }
  
  export { TodoAddNew };