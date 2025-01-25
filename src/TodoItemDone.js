import { CompleteIcon } from './CompleteIcon';

function TodoItemDone(props){
    return (
      <li>
        <div className='todo-list todo-list-done'>
          {/* <CompleteIcon /> */}
          <div className="status-done" title="Task completed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  className="check-icon-green icon">
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
          </div>
          <p>{props.text}</p>
          
        </div>
      </li>
    );
  }

  export { TodoItemDone };