import React from 'react';

import ToDo from './ToDo';

const ToDoList = props => {
    return (
        <div>
            {props.toDoList.map(toDo => {
                return <ToDo task={toDo.task} key={toDo.id} />
            })}
        </div>
    );
}

export default ToDoList;