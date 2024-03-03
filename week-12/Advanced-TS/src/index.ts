import {z} from 'zod';

interface User{
    name: string,
    age: number,
    password: string,
    email: string
};



//Pick TS API
type UpatedProps = Pick<User, 'name' | 'age' | 'email'>;

//Partial TS API
type UpdatedPropsOptional = Partial<UpatedProps>

//Readonly TS API
interface Cus{
    readonly name: string,
    readonly age: number
}

let cus1 : Cus = {
    name: 'viki',
    age: 25
}

interface Config{
    url: string,
    apikey: string
}

const config: Readonly<Config>  = {
    url: 'google.com',
    apikey: 'aswfwfvwebteb'
}



function updateUser(updateProps: UpdatedPropsOptional){

}

updateUser({

});

//MAP key value both js and ts

type Userss = {
    name: string,
    age: number
}

const userMap = new Map<string, Userss>();

userMap.set('wdqdc', {name:'wfvrewg', age: 6});



//Exclude TS API
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('mousemove');


//Type nference in zod
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
  });

type UserSchema = z.infer<typeof userProfileSchema>;