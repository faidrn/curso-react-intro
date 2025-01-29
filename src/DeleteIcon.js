import React from "react";
import { TodoIcon } from './TodoIcon';

function DeleteIcon(){
    return (
        <TodoIcon 
            type="delete" 
            fill="red"
        />
    );
}

export { DeleteIcon };