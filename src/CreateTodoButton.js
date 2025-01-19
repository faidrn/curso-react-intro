import './CreateTodoButton.css';

function CreateTodoButton(){
    return (
      <button className="btn-add-new">
        <span className='plus'>+</span> Add new task
      </button>
    );
  }
  
  export { CreateTodoButton };