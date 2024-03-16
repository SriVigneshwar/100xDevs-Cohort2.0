import { Appbar } from "../components/Appbar";
import { Users } from "../components/Users";
import { Balance } from "../components/Balance"
import { useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export function Dashboard(){

    const navigate = useNavigate();

    useEffect(async ()=>{
        try{
            const response = await axios.get('http://localhost:3000/api/v1/user/me',{
                headers:{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        }
        catch(e){
            navigate('/signin');
        }
    }, []);

    return(
        <div>
            <Appbar UserName={'Viki'}/>
            <div className="m-8">
                <Balance balanceAmt={'10,000'}/>
                <Users/>
            </div>
        </div>
    )
}