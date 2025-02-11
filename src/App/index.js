import React from 'react';
import { AppUI } from './AppUI';
//import { useLocalStorage } from './useLocalStorage';
import './App.css';
import { TodoProvider } from '../TodoContext';


function App() {

  

  return(
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}



export default App;
