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
//import React from 'react';

import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de Intro a React.js', completed: false},
  { text: 'Llorar con la Llorona', completed: false},
  { text: 'LALALALA', completed: false},
];

function App() {
  return (
   
   //<React.Fragment> = <>
   <>

      <TodoUser name={'Fredy Izquierdo'} />

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoTabs />
      
      <div className='todo-container'> 
        <TodoListAdd>
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
            />
          ))}

          <CreateTodoButton />
          
        </TodoListAdd>

        

        <TodoListDoing>
          {defaultTodos.map(todo => (
            <TodoItemDoing 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
            />
          ))}
        </TodoListDoing>

        <TodoListDone>
          {defaultTodos.map(todo => (
            <TodoItemDone 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}             
            />
          ))}
        </TodoListDone>       
      </div>

      
    </>
    //</React.Fragment> = </>
  );
}



export default App;
