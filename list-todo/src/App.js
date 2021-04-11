import TodoList from './components/TodoList'
import AddItem from './components/AddItem'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([], );

    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) =>{
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    }, []);


 const addTask = (todo) => {
   const id = Math.floor(Math.random () * 1000 + 1)
   const newTodo = {id, ...todo}
   setTodos ([newTodo, ...todos])
 }

  return (
    <div >
      <h1>Todo List</h1>
      
      <AddItem onAdd = {addTask} />
      <TodoList todos = {todos}/>
   
    </div>
  );
}

export default App;
