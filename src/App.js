import React from 'react';

import ToDoList from './components/ToDoComponents/ToDoList';
import ToDoForm from './components/ToDoComponents/ToDoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoItems: [],
      inputText: ""
    }
  };

  addToDo = event => {
    event.preventDefault();
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        {
          task: this.state.inputText,
          id: Date.now(),
          complete: false
        }
      ],
      inputText: ""
    })
  };

  clearAll = () => {
    this.setState({
      toDoItems: [],
      inputText: ""
    })
  };

  clearComplete = () => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(task => task.complete === false)
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  markComplete = id => {
    this.setState({
      toDoItems: this.state.toDoItems.map(task => {
        if (task.id === id ) {
          console.log(task);
          return {
            ...task, 
            complete: task.complete === false ? true : false};
        } else {
          return task;
        }
      })
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList 
          toDoItems={this.state.toDoItems}
          markComplete={this.markComplete}
        />
        <ToDoForm
          addToDo={this.addToDo}
          clearComplete={this.clearComplete}
          clearAll={this.clearAll}
          handleChange={this.handleChange}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

export default App;
