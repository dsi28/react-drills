import React, { Component } from 'react';
import './App.css';
import TodoList from './components/ListComponent';
import InputBox from './components/InputBoxComponent';

class App extends Component {
  state = { 
    list: ['test1', 'test2', '3'],
    currentTodo: ''
  }

  updateCurrentTodo = (value) => {
    this.setState({
      ...this.state,
      currentTodo: value
    });
  }
  addCurrentTodoToList = () => {
    this.setState({
      ...this.state,
      list: [...this.state.list, this.state.currentTodo],
      currentTodo: ''
    });
  }

  render(){
    return(
      <div style={{ textAlign: "center"}}>
        <h1>Todo List</h1>
        <InputBox 
          currentTodo={this.state.currentTodo}
          addCurrentTodoToList={this.addCurrentTodoToList}
          updateCurrentTodo={this.updateCurrentTodo}
        />
        <TodoList list={this.state.list}/>
      </div>
    )
  }
}

export default App;
