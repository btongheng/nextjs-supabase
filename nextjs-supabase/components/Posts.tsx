import {  Globe2Icon, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Post = ({ id, title, content, createdAt, isPublic }: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    isPublic: boolean;
}) => {
    return (
        <div className="w-full">
            <div className="flex flex-col p-4 border rounded-md">
                <h2 className="font-bold text-2xl">{title}</h2>
                <div className="flex gap-2 text-xs font-light text-white/50 mb-4"><p>Created at {new Date(createdAt).toLocaleString()}{' '}</p>{isPublic ? (
                        <>
                        <p className="text-green-500 text-xs flex gap-1 justify-center items-center"><Globe2Icon size={12}/>Public</p>
                        </>
                    ) : (
                        <>
                        <p className="text-red-500 text-xs flex gap-1 justify-center items-center"><Lock size={12}/>Private</p>
                        </>
                    )}</div>
                <div>
                    
                </div>
                <p className="mb-4 line-clamp-3">{content}</p>
                <Button asChild size={'sm'} variant={'outline'}>
                <Link href={`/post/${id}`}>
                     View Post
                </Link>
                </Button>
            </div>
        </div>   
    )
}

interface PostType {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    isPublic: boolean;
}

const Posts = ({ posts }: { posts: PostType[] }) => {
    return (
        <>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        {...post}
                    />
                ))}
            </div>
        </>
    )
}

export default Posts