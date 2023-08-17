import { getPosts } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Container from "./components/Container"


export default async function HomePage() {
  const posts = await getPosts()

  return (
    <Container classes='grid-col-2'>
      {posts.map((post) => (
        <div className="card" key={post.title}>
          {post.image && <Image src={post.image} alt={post.title} width='230' height="200" />}
          <h2>{post.title}</h2>
          <PortableText value={post.body} />
        </div>
      ))}
    </Container>
  )
}
