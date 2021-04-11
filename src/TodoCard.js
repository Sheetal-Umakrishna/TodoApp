import React from 'react'

const TodoCard = (props) => {
    const { todo } = props;
    
    const { title, completed } = todo;
    return(
        <div className = 'list-item'>            
                

            <h5> {title} </h5>
            <h6> {`Completed: ${completed}` }</h6>
    
        </div>
    )
}

export default TodoCard
