import {Heading} from '../components/Heading';
import {Button} from '../components/Button';
import {InputBox} from '../components/InputBox';
import {Subheading} from '../components/Subheading';
import {BottomWarning} from '../components/BottomWarning';

export const Signup = () =>{
    return <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-slate-50 w-80 rounded-lg px-4 p-2 h-max text-center'>
                <Heading label = {'Sign up'}></Heading>
                <Subheading label={'Enter your infromation to create an account'}></Subheading>
                <InputBox label={'First Name'} placeHolder={'John'}></InputBox>
                <InputBox label={'Last Name'} placeHolder={'Doe'}></InputBox>
                <InputBox label={'Email'} placeHolder={'srivignesh@gmail.com'}></InputBox>
                <InputBox label={'Password'} placeHolder={'12345abc'}></InputBox>
            
            <div className='pt-4'>
                <Button btnName={'Sign up'}></Button>
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
        </div>
    </div>
}