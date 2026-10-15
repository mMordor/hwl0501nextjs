import Link from "next/link"
import { Post } from "./page"

interface prop{
    p : Post
}

function PostCard({p}:prop) {
  return (
    <div 
            className="border w-[300px] border-gray-200 rounded-md  flex flex-col"
          >
            <Link 
              href={`/posts/${p.id}`}
              className="h-13 flex justify-between items-center-safe bg-white text-black px-5 py-1 overflow-hidden"
            >
              <h3 className="w-[80%] text-2xl truncate">
                {p.title}
              </h3>
              <span className="font-bold text-2xl">
                {">"}
              </span>
            </Link>
            <div className="h-[100px] p-3">
                <p className=" text-gray-400 line-clamp-3">
                {
                    p.body
                }
                </p>
            </div>
          </div>
  )
}

export default PostCard