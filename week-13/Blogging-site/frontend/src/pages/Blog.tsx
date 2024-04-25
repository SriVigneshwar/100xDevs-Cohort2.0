import { Appbar } from '../components/Appbar';
import { BlogContent } from '../components/BlogContent';
import { BlogContentSkeleton } from '../components/Blogskeleton';
import { useBlog } from '../hooks';
import { useParams } from 'react-router-dom';

export const Blog = () =>{
    const {id} = useParams();
    const {loading, blog} = useBlog({id: id || ""});

    if(loading){
        return (
            <div>
                <Appbar/>
                <div className='flex justify-center h-screen w-screen'>
                    <div className='flex flex-col justify-center w-full'>
                        <BlogContentSkeleton/>
                    </div>
                </div>
            </div>
            
        )
    }

    return (
        <div>
            <Appbar/>
            <BlogContent blog={blog}/>
        </div>
    )
}