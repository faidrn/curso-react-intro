import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
      <h1 className='TodoCounter'>
        {total > completed ? (
          <>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
          </>
        ) : (
          <>
            <span>¡Felicitaciones!</span> Has completado todos los TODOs
          </>
        )}
      </h1>
    );
  }
  
  export { TodoCounter };