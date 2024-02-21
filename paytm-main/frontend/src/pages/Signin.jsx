import {Heading} from '../components/Heading';
import {Button} from '../components/Button';
import {InputBox} from '../components/InputBox';
import {Subheading} from '../components/Subheading';
import {BottomWarning} from '../components/BottomWarning';

export const Signin = () =>{
    return <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='bg-slate-50 rounded-lg w-80 text-center h-max p-2 px-4'>
                <Heading label = {'Sign in'}></Heading>
                <Subheading label={'Enter your credentials to access your account'}></Subheading>
                <InputBox label={'Email'} placeHolder={'srivignesh@gmail.com'}></InputBox>
                <InputBox label={'Password'} placeHolder={'12345abc'}></InputBox>
                <div className='pt-4'>
                    <Button btnName={'Sign in'}></Button>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
            </div>
        </div>
    </div>
}
