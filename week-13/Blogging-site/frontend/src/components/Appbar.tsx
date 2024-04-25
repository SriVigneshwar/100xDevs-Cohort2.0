import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () =>{
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
            
            <Avatar  name="Viki" size="big"/>
        </div>
    </div>
}