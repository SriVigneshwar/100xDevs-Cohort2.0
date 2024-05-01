import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog{
    title: string;
    content: string;
    id: string;
    author: {
        name: string
    };
}

export const  useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
            axios.get(`${BACKEND_URL}/blog/bulk`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response=> {
                setBlogs(response.data.blogs);
                setLoading(false);
            });
        }
        else{
            navigate('/signin');
        }
    }, []);

    return {
        loading,
        blogs
    }
}

export const useBlog = ({id} : {id: string}) =>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            axios.get(`${BACKEND_URL}/blog/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response=> {
                setBlog(response.data.blog);
                setLoading(false);
            });
        }
        else{
            navigate('/signin');
        }
    }, []);
    
    return {
        loading,
        blog
    }
}