import { useState } from "react";
import axios from "axios";


export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
    <div>
        <input id="tit" style={{
            padding: 10,
            margin: 10,
        }} type="text"  placeholder="title" onChange={(e)=>{
            const value = e.target.value;
            setTitle(value);
        }}/> <br />
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={(e)=>{
            const value = e.target.value;
            setDesc(value);
        }}/> <br />
        <button style={{
            padding: 10,
            margin: 10,
        }} onClick={()=>{
            axios.post("http://localhost:3000/todo", {
                title: title,
                description: desc,
                completed: false
            })
            .then((res) => {
                alert('Todo added');
            });
        }}>Add a todo</button>
    </div>
    ) 
}