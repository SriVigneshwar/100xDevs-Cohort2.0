import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () =>{
    const [title, setTitile] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <Appbar/>
            <div className="flex justify-center w-full p-5">
                <div className="flex flex-col justify-center max-w-screen-lg w-full space-y-2">
                    <div className="w-full">
                        <input onChange={(e)=>{
                            setTitile(e.target.value);
                        }} type='text' className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                        rounded-lg focus:outline-none block p-2.5 mt-6" placeholder="Title"/>
                    </div>
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                        <TextEditor onChange={(e)=>{
                                setContent(e.target.value);
                        }}/>
                        <div className="flex items-center justify-between px-3 py-2 border-t">
                            <button onClick={async() =>{
                                const response = await axios.post(`${BACKEND_URL}/blog`, {
                                    title,
                                    content,
                                },
                            {
                                headers:{
                                    Authorization: 'Bearer ' + localStorage.getItem('token')
                                }
                            });
                                navigate(`/blog/${response.data.id}`);
                            }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                                Publish Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TextEditor({onChange} : {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="px-4 py-2 bg-white rounded-t-lg">
            <textarea onChange={onChange} rows={7} className="w-full px-0 text-sm text-gray-900 bg-white focus:outline-none" placeholder="Write an article..." required ></textarea>
        </div>
    )
}