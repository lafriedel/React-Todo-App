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
  }

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
  }

  clearAll = event => {
    this.setState({
      toDoItems: [],
      inputText: ""
    })
  }

  clearComplete = event => {
    this.setState({
      
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDoList={this.state.toDoItems}/>
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
