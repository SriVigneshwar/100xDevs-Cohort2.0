import axios from "axios";

export function Todos({todos}){
    return(
        <div>
            {
                todos.map((todo)=>{
                    return(
                    <>
                        <h2>{todo.title}</h2>
                        <h4>{todo.description}</h4>
                        <button onClick={() =>{
                            axios.put('http://localhost:3000/completed', {
                                id: todo._id
                            })
                            .then((res)=>{
                                alert('Todo Completed');
                            })
                        }}>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
                    </>)
                })
            }
        </div>  
    )
}