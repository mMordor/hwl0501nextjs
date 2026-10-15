"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import PostCard from "./PostCard";

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Home() {
  const [postList,setPostList] = useState<Post[]>([]);
  const firstFivePostsList = postList.filter((p)=>p.id <= 5)
  useEffect(
    ()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((res)=>setPostList(res))
    }
  ,[])


  return (
    <div className="w-full max-w-[70%] flex flex-wrap items-center justify-center gap-4 p-4 mt-4">
      {
        firstFivePostsList.map((p)=>(
          <PostCard p={p} key={p.id} />
        ))
      }
    </div>
  );
}
