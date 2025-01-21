import './TodoTabs.css';

function TodoTabs(){
    return (
      <div className='container-tabs'>
        <div className="todo-tab">
            <p>To Do</p>
        </div>
        <div className="doing-tab">
            <p>Doing</p>
        </div>
        <div className="done-tab">
            <p>Done</p>
        </div>
      </div>
      
    );
  }
  
  export { TodoTabs };