
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoList from "./TodoList";
import { useState, useEffect} from "react"
import axios from 'axios';
import api from '../api/contacts';
//import Button from "./Button";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom'
import { processResult } from "immer/dist/internal";


function App() {
  process.title = myApp;
  let history = useHistory();
  const [contacts,setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };


  useEffect (() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(localStorage))
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) =>{
        const responseTask = res.data;
        setTasks(responseTask);
    });
}, []);

const addTodoHandler = (task) => {
  const request ={
    id: uuidv4(), ...task,
  };
  const response = axios.post("/todos",request);
  console.log(response);
  setTasks([...tasks, response.data]);
  history.push("/");
};
 // let history = useHistory();

  // const onSubmit = (todo) => {
  //       const id = Math.floor(Math.random () * 1000) + 1
  //       history.push(`/todo/${id}`)
  //       return;
  // }

  return (
    <div className="container">
      <div className = "app-wrapper">
      <header className = 'header'> Todo List</header>
      
      
        <Router>
       
        <button className = 'button-add' type = "submit" > Add </button>
        
          <Switch>
          <TodoList/>
            <Route 
            path = "/"
            exact
            render = {(props) => (
              <TodoList
              {...props}
              tasks = {tasks}
              getTaskId = {addTodoHandler}/>
            )}
            />
            <Route path = "/add" render={ (props) =>

            (<AddTodo
              {...props}
              addTodoHandler = {addTodoHandler}
            


            
            />)}
            />

          </Switch>
        </Router>
      
      
      </div>
    </div>
  );
}

export default App;
