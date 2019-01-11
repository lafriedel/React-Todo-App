import React from 'react';

import ToDo from './Todo';
import Search from '../SearchComponents/Search';

import './Todo.css';

const ToDoList = props => {
    if (props.searched.length === 0) {
        return (
            <div className="to-do-list">
                {props.toDoItems.map(toDo => {
                    return (
                        <ToDo 
                            toDoItem={toDo} 
                            key={toDo.id} 
                            markListComplete={props.markListComplete} 
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
                        markSearchComplete={props.markSearchComplete}
                   />
                )
            })}
        </div>
    );

}

export default ToDoList;