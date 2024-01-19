import { useState } from 'react'

let count = 2;

function App() {

  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-8PM",
    id: 1
  }]);

  return (
    <div>
      <input type="text" placeholder='title' id="todoTitle"/> <br /><br />
      <input type="text" placeholder='description' id="todoDesc" /> <br /><br />
      <button onClick={()=>{
        setTodos([...todos, {
          title: document.querySelector('#todoTitle').value,
          description: document.querySelector('#todoDesc').value,
          id: count++
        }])
      }}>Add a todo</button> <br></br>
      {todos.map((todo) => <Todo title={todo.title} description={todo.description} key={todo.id}></Todo>)}
    </div>
  )
}

function Todo(props){
  return(
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </div>
  )
}

export default App
