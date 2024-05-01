import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const Signup = () =>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/blogs');
        }
    }, []);
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <Auth type="signup"></Auth>
        </div>
        <div className="hidden lg:block">
            <Quote/>
        </div>
    </div>
}