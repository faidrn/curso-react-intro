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
import { TodoAddNew } from './TodoAddNew';
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

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);



  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.status === 'done').length; // este todo viene de: const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const totalTodos = todos.length; //todos=>const [todos, setTodos] = React.useState(defaultTodos);

  const searchedTodosListed = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) && todo.status === 'listed';
    }
  );

  const searchedTodosDoing = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText) && todo.status === 'doing';
    }
  );

  const searchedTodosDone = todos.filter(
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

  const addTodo = () => {
    const newTodo = {text: searchValue, status: 'listed'}; 

    const updatedTodos = [...todos, newTodo]; // Agrega la nueva tarea al arreglo existente

    saveTodos(updatedTodos);

    setSearchValue(''); // Limpia el input

    // Deshabilitar el botón después de hacer clic
    setIsDisabled(true);

    // Quitar la clase 'highlighted' del div contenedor
    showFormAddNewTask();

  };


  const [isDisabled, setIsDisabled] = React.useState(true); // Estado inicial: botón deshabilitado

  const disabledButton = () => {
    setIsDisabled(!isDisabled); // Cambia el estado para habilitar/deshabilitar el botón
  };

  const showFormAddNewTask = () => {
    const containerAddTodo = document.querySelector('.container-add-todo');

    containerAddTodo.classList.toggle('container-add-todo-hidden');
  }


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
          
          <CreateTodoButton 
            onClick={() => showFormAddNewTask()}
          />
          
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
      <TodoAddNew 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        isDisabled={isDisabled} 
        setIsDisabled={setIsDisabled}
        onDisabled={() => disabledButton()} 
        onAddNew={() => addTodo()}

      />

      
    </>
    //</React.Fragment> = </>
  );
}



export default App;
