import React from 'react';

import ToDo from './ToDo';
import './ToDo.css';

const ToDoList = props => {
    return (
        <div>
            {props.toDoItems.map(toDo => {
                return (
                    <ToDo 
                        toDoItem={toDo} 
                        key={toDo.id} 
                        markComplete={props.markComplete} 
                    />
                );
            })}
        </div>
    );
}

export default ToDoList;