"use client"
import {  useEffect, useState } from "react";
import { Post } from "@/app/page";
import Link from "next/link";

function PostContent({id}:{id:string}) {
  const [post,setPost] = useState<Post | undefined>();
  useEffect(
    ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>res.json())
        .then((res)=>{setPost(res)})
    }
  ,[id])
  return (
    <div className="w-full max-w-[70%] flex flex-1 flex-col  justify-center items-start gap-3">
        <Link 
            href="/" 
            className="text-3xl w-10 h-10 rounded-full border-2 flex justify-center items-center">
            {"<"}
        </Link>
        <div className="border rounded-xl p-4">
            <h1 className="text-4xl">
                {post?.title}
            </h1>
            <br />
            <hr />
            <br />
            <p className="text-xl">
                {
                    post?.body
                }
            </p>
        </div>
    </div>
  )
}

export default PostContent