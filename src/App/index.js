import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
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


  return(
    <AppUI 
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
      addTodo={addTodo}    
    />
  );
}



export default App;
