import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import InputBox from './components/InputBox';

class App extends Component {
  state = {
    todoList: [],
    currentTodo: ''
  }
  addTodoHandler = (e) =>{
    this.setState({
      [e.target.name]: e.target.value 
    });
  }
  submitInputBoxHandler = (e) =>{
    e.preventDefault();
    let todo = this.state.currentTodo;
    this.setState({
      todoList: [...this.state.todoList, todo],
      currentTodo: ''    
    });
    console.log(`added ${todo} to list`);
  }
  render(){
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <InputBox currentTodo={this.state.currentTodo} 
          addTodoHandler={this.addTodoHandler} 
          submitInputBoxHandler={this.submitInputBoxHandler}/>
        {this.state.todoList.length < 1 
          ? <h3>Add a Todo!</h3>
          : this.state.todoList.map(todo => {
            return <Todo todo={todo} />
          })
        }
      </div>
    );
}}
export default App;