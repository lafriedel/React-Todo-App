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
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDoList={this.state.toDoItems}/>
        <ToDoForm />
      </div>
    );
  }
}

export default App;
