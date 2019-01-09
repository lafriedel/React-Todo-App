import React from 'react';

const ToDoForm = props => {
    return (
        <form onSubmit={props.addToDo}>
            <input 
                type="text"
                value={props.inputText}
                name="inputText"
                placeholder="What do you need to do?"
                onChange={props.handleChange}
            />
            <button>Add Item</button>
            <button onClick={props.clearComplete}>Clear Completed</button>
            <button type="button" onClick={props.clearAll}>Clear All</button>
        </form>
    )
}

export default ToDoForm;