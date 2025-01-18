import './TodoListDoing.css';

function TodoListDoing({ children }){
    return (
      <div className='container-list-doing'>
        <h2>
          Doing
        </h2>

        <ul>
          {children}
        </ul>
      </div>
    );
  }
  
  export { TodoListDoing };