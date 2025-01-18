import './TodoListDone.css';

function TodoListDone({ children }){
    return (
      <div className='container-list-done'>
        <h2>
          Done
        </h2>

        <ul>
          {children}
        </ul>
      </div>
    );
  }
  
  export { TodoListDone };