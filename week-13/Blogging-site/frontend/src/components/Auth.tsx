import { SignupInput } from "@vikitekie/blogging-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {BACKEND_URL} from '../config';

export const Auth = ({type} : {type: 'signup' | 'signin'}) =>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
       name: "",
       username: "",
       password: "" 
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/user/${type === 'signup' ? 'signup' : 'signin'}`, postInputs);
            const jwt = response.data;
            console.log(jwt);
            localStorage.setItem('token', jwt.jwt);
            navigate('/blogs');
        }catch(e){
            alert('Incorrect Inputs/Error while Signing in');
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center ">
                <form>
                    <div className="px-10 py-3">
                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-slate-700 text-center mt-2">
                            {type === "signup"? "Already have an account?" : "Don't have an account?"}
                            <Link className="pl-2 underline" to={type==="signup"? "/signin":"/signup"}>
                                {type === "signup" ? "Login" : "Signup"}
                            </Link>
                        </div>
                    </div>
                    <div>
                    {type === "signup"?   <LabelledInput label="Name" placeholder="Enter your name" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        });
                        }}></LabelledInput> 
                    : null}  
                        <LabelledInput label="Email" placeholder="m@example.com" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            });
                        }}></LabelledInput>
                        <LabelledInput label="Password" type="password" placeholder="***********" onChange={(e)=>{
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            });
                        }}></LabelledInput>
                    </div>
                    <div>
                        <button type="button" onClick={sendRequest} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
                        focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2">{type === "signup" ? "Sign up": "Sign in"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({label, placeholder, onChange, type} : LabelledInputType){
    return (
        <div className="my-4">
            <label className="block mb-2 text-sm font-semibold text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required={true} />
        </div>
    )
}