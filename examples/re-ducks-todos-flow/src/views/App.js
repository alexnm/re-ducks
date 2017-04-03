// external imports
import React, { Component } from "react";
// containers & components
import AddTodo from "./containers/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";
// css & assets
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Redux Todos with Flow</h2>
        </div>
        <p className="App-intro">
          Todos
        </p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
