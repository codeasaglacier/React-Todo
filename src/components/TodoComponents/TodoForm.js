import React, { Component } from 'react'

class TodoForm extends Component {

    constructor() {
        super()
        this.state = {
            item1: ''
        }
    }

    handleChanges = e => {
        this.setState( { [ e.target.name ]: e.target.value })
    }

    submitItem = e => {
        e.preventDefault()
        this.props.addTodo( e, this.state.item )
    }
    render() {
        console.log( 'Rendering form', this.state.item )
        return (
            <form onSubmit = { this.submitItem }>
                <input type = 'text' name = 'item' onChange = { this.handleChanges } />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm