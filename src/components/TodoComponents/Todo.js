import React from 'react'

const Item = props => {
    console.log( 'Props: ', props)

    return (
        <div
            className = { `item${ props.item.completed ? ' completed' : ''}`}
            onClick = { ()=> props.toggleTodo( props.item.id ) }
        >
            <p>{ props.item.task }</p>
        </div>
    )
}

export default Item