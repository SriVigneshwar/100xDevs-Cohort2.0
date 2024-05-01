import { Appbar } from '../components/Appbar'
import {BlogCard} from '../components/BlogCard'
import { Blogskeleton } from '../components/Blogskeleton';
import { useBlogs } from '../hooks'

export const Blogs = () =>{

    const {loading, blogs} = useBlogs();

    if(loading){
        return (
            <div className='flex justify-center h-screen w-screen'>
                <div className='flex flex-col justify-center text-5xl font-semibold'>
                    <Blogskeleton/>
                    <Blogskeleton/>
                    <Blogskeleton/>
                    <Blogskeleton/>
                </div>
            </div>
        )
    }

    return(
        <div>
            <Appbar/>
            <div className='flex justify-center max-h-fit'>
                <div className=''>
                    {blogs.map(blog => <BlogCard id={blog.id} key={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate='2nd Apr 2024'/>)}
                </div>
            </div>
        </div>
    )
}