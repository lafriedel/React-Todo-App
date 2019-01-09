import React from 'react';

const ToDo = props => {
    return (
        <div 
            onClick={() => props.markComplete(props.toDoItem.id)}>
            {props.toDoItem.task}
        </div>
    );
}

export default ToDo;