import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () =>{
    const navigate = useNavigate();
    return <div className="border-b z-50 flex bg-white justify-between w-full px-10 sticky top-0 py-3">
        <Link to={'/blogs'} className="flex flex-col justify-center">
            <div className="text-2xl font-semibold">
                Medium
            </div>
        </Link>
        <div>
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4">New</button>
            </Link>
            <button type="button" onClick={()=>{
                localStorage.removeItem('token');
                navigate('/signin');
            }} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 mr-4">Logout</button>
            <Avatar  name="Viki" size="big"/>
        </div>
    </div>
}