import { Link } from "react-router-dom";

export interface BlogCardProps {
    id:string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps)=>{
    return(
        <Link to={`/blog/${id}`}>
            <div className="border-b p-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex px-2 pt-2">
                    <Avatar name={authorName}/>
                    <div className="font-extralight pl-2 flex flex-col justify-center">{authorName}</div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle/>
                    </div>
                    <div className="pl-2 font-thin text-slate-500 flex flex-col justify-center">
                        {publishedDate}
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-2xl font-bold">
                        {title}
                    </div>
                    <div className="text-lg font-normal pt-2">
                        {content.slice(0,100) + "..."}
                    </div>
                </div>
                <div className=" text-slate-400 text-sm font-thin py-3 px-2">
                    {`${Math.ceil(content.length / 100)} minutes`}
                </div>
            </div>
        </Link>
    )
}

function Circle(){
    return (
        <div className="h-1 w-1 bg-gray-500 rounded-full">
        </div>
    )
}

export  const Avatar = ({name, size = 'small'} : {name : string, size?: string}) =>{
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden  bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10" }`}>
            <span className={`font-thin ${size === "small" ? "text-xs" : "text-md"}   text-gray-300`}>{name[0]}</span>
        </div>
    )
}