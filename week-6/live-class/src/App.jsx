import React from 'react'
import { useState, useEffect } from 'react'


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
      todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)
  )

  function Todo ({title, description}){
    return(
    <div>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>
    </div>
    )
  }
}






export default App
