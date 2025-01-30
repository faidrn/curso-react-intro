import { TodoUser } from './TodoUser';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoListAdd } from './TodoListAdd';
import { TodoTabs } from './TodoTabs';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoListDoing } from './TodoListDoing';
import { TodoItemDoing } from './TodoItemDoing';
import { TodoListDone } from './TodoListDone';
import { TodoItemDone } from './TodoItemDone';
import React from 'react';

import './App.css';

/* const defaultTodos = [
  { text: 'Cortar cebolla', status: 'done'},
  { text: 'Tomar el curso de Intro a React.js', status: 'doing'},
  { text: 'Llorar con la Llorona', status: 'listed'},
  { text: 'LALALALA', status: 'listed'},
  { text: 'Usar estados derivados', status: 'done'},
];

 localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));  */
// localStorage.removeItem('TODOS_V1');


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);

  }
  

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = parsedTodos.filter(todo => todo.status === 'done').length;
  const totalTodos = todos.length; //todos=>const [todos, setTodos] = React.useState(defaultTodos);

  const searchedTodosListed = parsedTodos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) && todo.status === 'listed';
    }
  );

  const searchedTodosDoing = parsedTodos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText) && todo.status === 'doing';
    }
  );

  const searchedTodosDone = parsedTodos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText) && todo.status === 'done';
    }
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].status = 'done';

    saveTodos(newTodos);
  };

  const doingTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].status = 'doing';

    saveTodos(newTodos);
  };

  const returnTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].status = 'listed';

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };


  return (
   
   //<React.Fragment> = <>
   <>

      <TodoUser name={'Fredy Izquierdo'} />

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />

      <TodoTabs />
      
      <div className='todo-container'> 
        <TodoListAdd>
          {searchedTodosListed.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                onDoing={() => doingTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            
          ))}
          
          <CreateTodoButton />
          
        </TodoListAdd>

        

        <TodoListDoing>
          {searchedTodosDoing.map(todo => (
            <TodoItemDoing 
              key={todo.text} 
              text={todo.text} 
              onComplete={() => completeTodo(todo.text)}
              onTodo={() => returnTodo(todo.text)}
            />
          ))}
        </TodoListDoing>

        <TodoListDone>
          {searchedTodosDone.map(todo => (
            <TodoItemDone 
              key={todo.text} 
              text={todo.text}            
            />
          ))}
        </TodoListDone>       
      </div>

      
    </>
    //</React.Fragment> = </>
  );
}



export default App;
