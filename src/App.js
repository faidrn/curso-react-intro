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

const defaultTodos = [
  { text: 'Cortar cebolla', status: 'done'},
  { text: 'Tomar el curso de Intro a React.js', status: 'doing'},
  { text: 'Llorar con la Llorona', status: 'listed'},
  { text: 'LALALALA', status: 'listed'},
  { text: 'Usar estados derivados', status: 'done'},
];
/*
const listTasks = defaultTodos.filter((task) => 
  task.status === 'listed'
);

const doingTasks = defaultTodos.filter((task) => 
  task.status === 'doing'
);

const doneTasks = defaultTodos.filter((task) => 
  task.status === 'done'
);*/

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = defaultTodos.filter(todo => todo.status === 'done').length;
  const totalTodos = todos.length; //todos=>const [todos, setTodos] = React.useState(defaultTodos);

  const searchedTodosListed = defaultTodos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) && todo.status === 'listed';
    }
  );

  const searchedTodosDoing = defaultTodos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText) && todo.status === 'doing';
    }
  );

  const searchedTodosDone = defaultTodos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText) && todo.status === 'done';
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].status = 'done';

    setTodos(newTodos);
  };

  const doingTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].status = 'doing';

    setTodos(newTodos);
  };

  const returnTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].status = 'listed';

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
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
