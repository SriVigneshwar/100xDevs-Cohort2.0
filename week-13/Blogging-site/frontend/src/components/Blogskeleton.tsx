import { Circle } from "./BlogContent"

export const Blogskeleton = () =>{
    return (
    <div role="status" className="animate-pulse p-4 w-screen max-w-screen-md flex px-2 pt-2">
            <div className="border-b p-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex px-2 pt-2">
                    <div className="bg-gray-200 rounded-full w-6 h-6 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="flex justify-center flex-col pl-2">
                    </div>
                    <div className="pl-2 font-thin text-slate-500 flex flex-col justify-center">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-2xl font-bold">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="text-lg font-normal pt-2">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className=" text-slate-400 text-sm font-thin py-3 px-2">
                    <div className="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
    </div>
    )
}

export const BlogContentSkeleton = () =>{
    return(
        <div className="flex justify-center h-screen">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl">
                <div className="col-span-8 m-2">
                    <div className=" text-5xl font-extrabold">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className=" text-slate-400 py-4">
                        <div className="h-2 w-32 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className=" text-xl font-normal text-slate-900">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="col-span-4 m-2">
                    <div className=" text-xl font-medium">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="pt-3 flex space-x-5">
                        <div className="flex flex-col justify-center">
                            <Circle/>
                        </div>
                        <div>
                            <div className="text-3xl font-bold pb-3">
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            </div>
                            <div className="font-base text-lg text-slate-500">
                                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}