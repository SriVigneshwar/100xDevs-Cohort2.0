import {Heading} from '../components/Heading';
import {Button} from '../components/Button';
import {InputBox} from '../components/InputBox';
import {Subheading} from '../components/Subheading';
import {BottomWarning} from '../components/BottomWarning';

import {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Signup = () =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLasteName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-slate-50 w-80 rounded-lg px-4 p-2 h-max text-center'>
                <Heading label = {'Sign up'}></Heading>
                <Subheading label={'Enter your infromation to create an account'}></Subheading>
                <InputBox onChange={(e) =>{
                    setFirstName(e.target.value);
                }} label={'First Name'} placeHolder={'John'} value={firstName}></InputBox>
                <InputBox onChange={(e) =>{
                    setLasteName(e.target.value);
                }} label={'Last Name'} placeHolder={'Doe'} value={lastName}></InputBox>
                <InputBox onChange={(e) =>{
                    setUserName(e.target.value);
                }} label={'Email'} placeHolder={'srivignesh@gmail.com'} value={username}></InputBox>
                <InputBox onChange={(e) =>{
                    setPassword(e.target.value);
                }} label={'Password'} ipType={"password"} placeHolder={'*******'} value={password}></InputBox>
            
            <div className='pt-4'>
                <Button onClick={async ()=>{
                    try{
                        const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        if(response.status == 200){
                            localStorage.setItem('token', response.data.token);
                            navigate('/dashboard');
                        }
                    }
                    catch(e){
                        alert('Sigin Failed!');
                        setFirstName('');
                        setLasteName('');
                        setUserName('');
                        setPassword('');
                    }
                }} btnName={'Sign up'}></Button>
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
        </div>
    </div>
}