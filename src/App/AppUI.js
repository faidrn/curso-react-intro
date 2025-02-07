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
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';


function AppUI({
    loading, 
    error, 
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
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodosListed.length === 0) && <EmptyTodos />}
               {searchedTodosListed.map(todo => (
                   <TodoItem 
                     key={todo.text} 
                     text={todo.text} 
                     onDoing={() => doingTodo(todo.text)}
                     onDelete={() => deleteTodo(todo.text)}
                   />
                 
               ))}
               
               {!loading && (
                <CreateTodoButton 
                  onClick={() => showFormAddNewTask()}
                />
               )}
               
               
             </TodoListAdd>
             
     
             <TodoListDoing>
                {loading && <TodosLoading />}
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
                {loading && <TodosLoading />}
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