import './TodoTabs.css';

function TodoTabs(){
    return (
      <div className='container-tabs'>
        <div className="todo-tab tabs">
            <p id='paragraph-todo-tab' className='tab-active'>To Do</p>
        </div>
        <div className="doing-tab tabs">
            <p id='paragraph-doing-tab' className='tab-inactive'>Doing</p>
        </div>
        <div className="done-tab tabs">
            <p id='paragraph-done-tab' className='tab-inactive'>Done</p>
        </div>
      </div>
      
    );
  }
  
  export { TodoTabs };