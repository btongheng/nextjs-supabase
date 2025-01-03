import { getAllPosts } from '@/app/actions/post'
import Posts from '@/components/Posts'

export default async function Home() {
  const { posts } = await getAllPosts()

  return (
    <div>
      <h2>Home</h2>
      <Posts posts={posts ?? []} />
    </div>
  )
}
