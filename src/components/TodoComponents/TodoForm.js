import React from 'react';

const ToDoForm = props => {
    return (
        <div className="form-container">
            <form>
                <div className="form-div add">
                    <input
                        type="text"
                        value={props.inputText}
                        name="inputText"
                        placeholder="What's on today's list?"
                        onChange={props.handleChange}
                    />
                    <button onClick={props.addToDo} className="btn">Add Item</button>
                </div>
                <div className="form-div complete">
                    <button className="btn" onClick={props.clearComplete}>Clear Completed</button>
                    <button className="btn clear-all" type="button" onClick={props.clearAll}>Clear All</button>
                </div>
            </form>
        </div>

    )
}

export default ToDoForm;