import { Suspense } from "react";
import Loading from "src/components/atoms/Loading/Loading";
import PostsGallery from "src/components/organisms/PostsGallery/PostsGallery";

export default async function Blog() {
  return (
    <Suspense fallback={<Loading />}>
      <PostsGallery />
    </Suspense>
  )
}