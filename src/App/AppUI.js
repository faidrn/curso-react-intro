import { TodoUser } from '../TodoUser';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoListAdd } from '../TodoListAdd';
import { TodoTabs } from '../TodoTabs';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoListDoing } from '../TodoListDoing';
import { TodoItemDoing } from '../TodoItemDoing';
import { TodoListDone } from '../TodoListDone';
import { TodoItemDone } from '../TodoItemDone';
import { TodoAddNew } from '../TodoAddNew';


function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodosListed,
    doingTodo,
    deleteTodo,
    showFormAddNewTask,
    searchedTodosDoing,
    completeTodo,
    returnTodo,
    searchedTodosDone,
    isDisabled,
    setIsDisabled,
    disabledButton,
    addTodo,
}){
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

export { AppUI };