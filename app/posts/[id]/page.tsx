import { Suspense } from "react"
import PostContent from "./PostContent";

export type PostProps = {
  params: Promise<{ id: string }>;
};

async function PostPageContent({ params }: PostProps) {
  const { id } = await params;

  return <PostContent id={id} />;
}

function PostPpage({params}:PostProps) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PostPageContent params={params} />
      </Suspense>
    </>
  )
}

export default PostPpage



