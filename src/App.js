import React from 'react';

import ToDoList from './components/ToDoComponents/ToDoList';
import ToDoForm from './components/ToDoComponents/ToDoForm';

import './App.css';

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
    console.log("addToDo ran");
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
    }, this.updateLocalStorage)
  };

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      toDoItems: [],
      inputText: ""
    },
    this.updateLocalStorage)
  };

  clearComplete = (e) => {
    e.preventDefault();
    this.setState({
      toDoItems: this.state.toDoItems.filter(task => task.complete === false)
    },
    this.updateLocalStorage)
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
          return {
            ...task, 
            complete: task.complete === false ? true : false};
        } else {
          return task;
        }
      })
    },
    this.updateLocalStorage
    )
  }

  loadLocalStorage= () => {
      if (localStorage.hasOwnProperty("list")) {
        let list = localStorage.getItem("list");

            list = JSON.parse(list);
            this.setState({toDoItems: list});
      }
    }

    updateLocalStorage = () => {
      localStorage.setItem("list", JSON.stringify(this.state.toDoItems))
    }

  componentDidMount() {
    console.log("component mounted");
    this.loadLocalStorage();
  }
  
  render() {
    return (
      <div className="app">
        <ToDoForm
          addToDo={this.addToDo}
          clearComplete={this.clearComplete}
          clearAll={this.clearAll}
          handleChange={this.handleChange}
          inputText={this.state.inputText}
        />
        <ToDoList 
          toDoItems={this.state.toDoItems}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
