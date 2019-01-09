import React from 'react';


const ToDo = props => {
    return (
        <div 
            onClick={() => props.markComplete(props.toDoItem.id)}
            className={`to-do ${props.toDoItem.complete}` }    
        >
            <p>{props.toDoItem.task}</p>
        </div>
    );
}

export default ToDo;