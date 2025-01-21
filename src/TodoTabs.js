import './TodoTabs.css';

function TodoTabs(){
    return (
      <div className='container-tabs'>
        <div className="todo-tab tabs">
            <p>To Do</p>
        </div>
        <div className="doing-tab tabs">
            <p>Doing</p>
        </div>
        <div className="done-tab tabs">
            <p>Done</p>
        </div>
      </div>
      
    );
  }
  
  export { TodoTabs };