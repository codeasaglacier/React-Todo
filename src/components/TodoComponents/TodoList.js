import React from 'react'
import Todo from './Todo'

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
      <button onClick = { props.clearCompleted }>Clear Completed</button>
    </div>
  )
}

export default TodoList