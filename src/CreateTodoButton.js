import './CreateTodoButton.css';

function CreateTodoButton(props){
    return (
      <button className="btn-add-new"
        onClick={props.onClick}
      >
        <span className='plus'>+</span> Add new task
      </button>
    );

    
  }
  
  export { CreateTodoButton };