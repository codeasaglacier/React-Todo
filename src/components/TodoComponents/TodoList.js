import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = props => {

  return (
    <div className = 'todo-list'>
      { props.todos.map( item => (
        <Todo 
          key = { item.id } 
          item = { item } 
          toggleTodo = { props.toggleTodo } 
        />
      ))}
      <button 
        className = 'todo-list button' 
        onClick = { props.clearCompleted }>Clear Completed</button>
    </div>
  )
}

export default TodoList