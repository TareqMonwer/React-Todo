import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import uuid from 'uuid';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';


class App extends React.Component {

  state = {
    todos: []
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: 
        [...this.state.todos, res.data]}));
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(this.setState({ todos: [...this.state.todos
        .filter(todo => todo.id !== id)] }))
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res  => this.setState({ todos: res.data.slice(0,10) }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo 
                addTodo={this.addTodo} 
              />
              <Todos 
                todos={this.state.todos} 
                markComplete={this.markComplete} 
                delTodo={this.delTodo} 
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
