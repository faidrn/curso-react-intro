import { TodoUser } from './TodoUser';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoListAdd } from './TodoListAdd';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoListDoing } from './TodoListDoing';
import { TodoListDone } from './TodoListDone';
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
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
            />
          ))}
        </TodoListDoing>

        <TodoListDone>
          {defaultTodos.map(todo => (
            <TodoItem 
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
