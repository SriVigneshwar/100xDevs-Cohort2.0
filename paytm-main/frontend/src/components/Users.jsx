import { useEffect, useState } from "react"
import { Button } from "./Button"
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

export const  Users = () => {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    

    useEffect( () => {
        axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter, {
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token') 
            }
        }).then(res => { setUsers(res.data.user) });
    } , [filter]);

    return <>
    <div className="font-bold text-lg mt-6">
        Users
    </div>
    <div className="my-2">
        <input onChange={(e) =>{
            setFilter(e.target.value);
        }} type="text" placeholder="Search Users..." className="w-full border border-slate-200 rounded px-2 py-1"/>
    </div>
    <div>
        {users.map(user => <User user={user} key={user._id}/>)}
    </div>
    </>   
}

function User({user}){
    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-2 mt-1">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0].toUpperCase()}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <Button btnName={"Send Money"} onClick={(e) =>{
                    navigate("/send?id=" + user._id + "&name=" + user.firstName);
                }}/>
            </div>
        </div>
    )
}