import React from 'react';

const ToDoForm = props => {
    return (
        <div className="form-container">
            <form onSubmit={props.addToDo}>
                <div className="form-div">
                    <input
                        type="text"
                        value={props.inputText}
                        name="inputText"
                        placeholder="What do you need to do?"
                        onChange={props.handleChange}
                    />
                    <button className="btn">Add Item</button>
                </div>
                <div className="form-div">
                    <button className="btn" onClick={props.clearComplete}>Clear Completed</button>
                    <button className="btn" type="button" onClick={props.clearAll}>Clear All</button>
                </div>
            </form>
        </div>

    )
}

export default ToDoForm;