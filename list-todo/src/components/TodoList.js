
import ListItem from './ListItem';

const TodoList = ({todos}) => {    
    return (
        <>              
            { todos ?
                ( <div style = {{display: "flex", flexWrap: "wrap"}}>
                    {
                        todos.map(
                            (todo) => 
                                <ListItem key = {todo.id} todo={todo} />
                         )
                    }
                    </div>
                    )  :  (
                            <h1>Loading...</h1>
                        )
            }
        </>
    )
}
export default TodoList
