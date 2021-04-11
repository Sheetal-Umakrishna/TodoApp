import React from 'react'
import { useState } from 'react'

const AddItem = ({onAdd}) => {
    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title){
            alert('Please add a text')
            return
        }
    
    onAdd ({title})
    setTitle('')
    }
  
    return (
        <form className = 'add-form'>
            <div className = 'form-control'>
                
                
                <input type = 'text' placeholder = 'Add Task'
                value = {title}
                onChange = { (e) => setTitle(e.target.value)} />
                
            </div>
            <div><input type = "submit" value = "Add" onClick = { onSubmit}
            className = 'btn btn-block' /></div>
        </form>
    )
}

export default AddItem
