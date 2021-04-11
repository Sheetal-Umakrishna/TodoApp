import React from 'react'
import { useState, } from 'react'


const AddTodo = (props) => {
    const { addTodoHandler } = props;

    const [name,setName] = useState('');
   const add = (e) => {
        e.preventDefault();
        if (!name){
            alert ("All fields are to be filled");
            return;
        }
        addTodoHandler('');
        setName({name});
        
        
    }

    return (
        <div className="container">
      <div className = "app-wrapper">
      <header className = 'header'> Add</header>
      <form onSubmit ={add}>
          <div>
          <input
          type = "text"
          name = "name"
          value = {name}
          placeholder = "Add Todo"
          onChange = {(e) => setName({name: e.target.value})}
          />
</div>
<button className = 'button-add' type = "submit" > Add </button>

      </form>
      </div>
      </div>
    )
}

export default AddTodo
