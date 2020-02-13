import React, { Component } from 'react'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

const todos = [
  {
    task: 'Have Coffee',
    id: 0,
    completed: false
  },
  {
    task: 'Meditate',
    id: 1,
    completed: false
  },
  {
    task: 'Eat Breakfast',
    id: 2,
    completed: false
  },
  {
    task: 'Finish Todos',
    id: 3,
    completed: false
  }
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos
    }
  }

  addTodo = ( e, item ) => {
    e.preventDefault()

    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [ ...this.state.todos, newTodo ]
    })
  }

  toggleTodo = itemId => {
    console.log( 'ItemId: ', itemId )

    this.setState({
      todos: this.state.todos.map( item => {
        console.log( 'Item', item )
        if ( itemId === item.id ) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault()
    console.log( this.state.todos )
    this.setState({
      todos: this.state.todos.filter( item => item.completed === false )
    })
    console.log( this.state.todos )
  }

  render() {
    console.log( 'rendering...' )
    return (
      <div>
        <div className = 'header'>
          <h1>To Do Today</h1>
          <TodoForm addTodo = { this.addTodo } />
        </div>
        <TodoList
          todos = { this.state.todos }
          toggleTodo = { this.toggleTodo }
          clearCompleted = { this.clearCompleted }
        />
      </div>
    );
  }
}

export default App;
