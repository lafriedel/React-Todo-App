import React from 'react';

import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import SearchForm from './components/SearchComponents/SearchForm';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: [],
      searched: [],
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

  markListComplete = id => {
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

  markSearchComplete = id => {
    this.setState({
      searched: this.state.searched.map(task => {
        if (task.id === id) {
          return {
            ...task,
            complete: task.complete === false ? true : false
          };
        } else {
          return task;
        }
      })
    })
  }

  handleSearch = event => {
    let toDoItemsList = [];
    let searchedList = [];

        if (event.target.value !== "") {
            toDoItemsList = this.state.toDoItems;
            searchedList = toDoItemsList.filter(item => {
              let listItem = item.task.toLowerCase();
              let searchQuery = event.target.value.toLowerCase();
              console.log(listItem.includes(searchQuery), listItem);
              return listItem.includes(searchQuery);
            })
          }
        this.setState({
          searched: searchedList
        });
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
          markListComplete={this.markListComplete}
          markSearchComplete={this.markSearchComplete}
          searched={this.state.searched}
        />
      </div>
    );
  }
}

export default App;
