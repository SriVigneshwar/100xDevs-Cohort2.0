import { useState } from "react";
//import { useEffect } from "react";
//import axios from "axios"

function App() {
  // state? useState
  /*const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={() => setSelectedId(1)}>1</button>
    
    <button onClick={function() {
      setSelectedId(2);
    }}>2</button>
    
    <button onClick={function() {
      setSelectedId(3);
    }}>3</button>
    
    <Todo id={selectedId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  // implement effect here
  useEffect(() => {
      axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(response => {
          setTodo(response.data.todo)
        })
  }, [id])

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>*/
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [finalValue, setfinalValue] = useState(1);
  let count = 0;
  for(let i=0; i<=inputValue; i++){
    count+=i;
  }

  return(
    <>
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }} placeholder={"Find sum of 1 to n"}/>
      <br />
      Sum from 1 to {inputValue} is {finalValue}
      <button onClick={()=>{
        setCounter(counter++);
      }}>Counter({counter})</button>
    </div>
    </>
  )
}

export default App;