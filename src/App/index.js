import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import './App.css';
import { TodoProvider } from '../TodoContext';


function App() {

  

  return(
    <TodoProvider>
      <AppUI 
        /* loading={loading}
        error={error}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodosListed={searchedTodosListed}
        doingTodo={doingTodo}
        deleteTodo={deleteTodo}
        showFormAddNewTask={showFormAddNewTask}
        searchedTodosDoing={searchedTodosDoing}
        completeTodo={completeTodo}
        returnTodo={returnTodo}
        searchedTodosDone={searchedTodosDone}      
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        disabledButton={disabledButton}
        addTodo={addTodo}     */
      />
    </TodoProvider>
    
  );
}



export default App;
