import axios from 'axios';
import React,{ useState, useEffect} from 'react'
import TodoCard from './TodoCard'
//import { useHistory } from 'react-router-dom'


const TodoList = () => {
    
    //let history = useHistory();
    const [todos, setTodos] = useState();
    useEffect (() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) =>{
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    }, []);

      
 

    return (
        <div>
            <form >
                
                <div className = 'task-input'>
                    {
                        todos ?
                        ( 
                            <div className = 'list'>
                                {
                                    todos.slice(0,5).map((todo) => <TodoCard key = {todo.id} todo={todo} />
                                        )
                                }
                            </div>

                        )
                        :
                        (
                            <h1>Loading...</h1>
                        )
                    }



                </div>
            </form>
        </div>
    )
}

export default TodoList
