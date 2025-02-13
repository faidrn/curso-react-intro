import React from "react";
import './TodoForm.css'


function TodoForm(){
    return(
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Digita aquí tu TODO"
            />
            <div className="btn-todoForm-container">
                <button 
                    className="btn-todoForm btn-todoForm--cancel"
                >Cancelar</button>
                <button 
                    className="btn-todoForm btn-todoForm--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };