function TodoItem(props){
    return (
      <li>
        <div className='todo-list'>
          <span>V</span>
          <p>{props.text}</p>
          <span>X</span>
        </div>
      </li>
    );
  }

  export { TodoItem };