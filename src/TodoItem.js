function TodoItem(props){
    return (
      <li>

        <div className='todo-list todo-list-add'>
          
          <p>{props.text}</p>

          <div className="buttons-todo-list">
            <span 
              className="change-status-to-doing" 
              title="Move to the Doing tab" 
              onClick={props.onDoing}
            >
              <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960" className="check-icon-grey icon">
                <path d="M40-160v-640h400v160h-80v-80H120v480h240v-80h80v160H40Zm480 0v-160h80v80h80v80H520Zm240 0v-80h80v-80h80v160H760ZM520-640v-160h160v80h-80v80h-80Zm320 0v-80h-80v-80h160v160h-80ZM120-240v-480 480Zm560-80-56-56 63-64H240v-80h447l-63-64 56-56 160 160-160 160Z"/>
              </svg>
            </span>

            <span 
              className="delete-item" 
              title="Delete task" 
              onClick={props.onDelete}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon delete-icon">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </span>
          </div>
          <button></button>
        </div>
      </li>
    );
  }

  export { TodoItem };