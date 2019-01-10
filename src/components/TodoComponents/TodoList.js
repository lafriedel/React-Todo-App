import React from 'react';

import ToDo from './ToDo';
import Search from '../SearchComponents/Search';

import './ToDo.css';

const ToDoList = props => {
    if (props.searched.length === 0) {
        return (
            <div className="to-do-list">
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
    return (
        <div className="to-do-list">
            {props.searched.map(item => {
                return (
                   <Search 
                        search={item}
                        key={item.id}
                        markComplete={props.markComplete}
                   />
                )
            })}
        </div>
    );

}

export default ToDoList;