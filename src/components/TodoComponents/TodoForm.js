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
            <button type="submit">Add Item</button>
            <button type="button">Clear All</button>
        </form>
    )
}

export default ToDoForm;