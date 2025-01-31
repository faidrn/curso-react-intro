import './CreateTodoButton.css';

function CreateTodoButton(){
    return (
      <button className="btn-add-new"
        onClick={
          (event) => 
            console.log('diste click')
        }
      >
        <span className='plus'>+</span> Add new task
      </button>
    );
  }
  
  export { CreateTodoButton };