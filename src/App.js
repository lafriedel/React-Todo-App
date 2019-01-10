import React from 'react';

import ToDoList from './components/ToDoComponents/ToDoList';
import ToDoForm from './components/ToDoComponents/ToDoForm';
import SearchForm from './components/SearchComponents/SearchForm';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: [],
      toDoText: ""
    }
  };

  addToDo = event => {
    event.preventDefault();
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        {
          task: this.state.toDoText,
          id: Date.now(),
          complete: false
        }
      ],
      toDoText: ""
    }, this.updateLocalStorage)
  };

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      toDoItems: [],
      toDoText: ""
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
        if (task.id === id) {
          return {
            ...task,
            complete: task.complete === false ? true : false
          };
        } else {
          return task;
        }
      })
    },
      this.updateLocalStorage
    )
  }

  handleSearch = event => {
    let toDoItemsList = [];
    // let searchList = [];

        if (event.target.value !== "") {
            toDoItemsList = this.state.toDoItems;
            toDoItemsList.filter(item => {
              let listItem = item.task.toLowerCase();
              let searchQuery = event.target.value.toLowerCase();
              console.log(listItem.includes(searchQuery), listItem);
              return listItem.includes(searchQuery);
            })
          }
  }

  loadLocalStorage = () => {
    if (localStorage.hasOwnProperty("list")) {
      let list = localStorage.getItem("list");

      list = JSON.parse(list);
      this.setState({ toDoItems: list });
    }
  }

  updateLocalStorage = () => {
    localStorage.setItem("list", JSON.stringify(this.state.toDoItems))
  }

  componentDidMount() {
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
          toDoText={this.state.toDoText}
        />
        <SearchForm
          handleSearch={this.handleSearch}
          toDoItems={this.state.toDoItems}
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
