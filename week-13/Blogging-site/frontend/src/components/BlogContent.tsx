import { Blog } from "../hooks";


export const BlogContent = ({blog} : {blog: Blog}) =>{
    return(
        <div className="flex justify-center max-h-fit">
            <div key={blog.id} className="grid grid-cols-12 space-x-2 px-10 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8">
                    <div className=" text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className=" text-slate-400 py-4">
                        Posted on 16 April 2024
                    </div>
                    <div className=" text-xl font-normal text-slate-900">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className=" text-xl font-medium">
                        Author
                    </div>
                    <div className="pt-3 flex space-x-5">
                        <div className="flex flex-col justify-center">
                            <Circle/>
                        </div>
                        <div>
                            <div className="text-3xl font-bold pb-3">
                                {blog.author.name  || "Anonymous"}
                            </div>
                            <div className="font-base text-lg text-slate-500">
                                A catchy phrase about the author's ability to write blogs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export function Circle(){
    return (
        <div className="h-8 w-8 bg-gray-200 rounded-full">
        </div>
    )
}