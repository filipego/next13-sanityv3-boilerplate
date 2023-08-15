import { getPosts } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"


export default async function HomePage() {
  const posts = await getPosts()

  return (
    <main>
      {posts.map((post) => (
        <div key={post.title}>
          {post.image && <Image src={post.image} alt={post.title} width={250} height={200} />}
          <h2>{post.title}</h2>
          <PortableText value={post.body} />
        </div>
      ))}
    </main>
  )
}
