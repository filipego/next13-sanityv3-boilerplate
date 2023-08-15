import { createClient, groq } from "next-sanity";

export async function getPosts() {
    const client = createClient({
        projectId: "6587pnwl",
        dataset: "production",
        apiVersion: "2021-10-21",
    })

    return client.fetch(
        groq`*[_type == 'post']{
            title,
            "image": mainImage.asset->url,
            body
        }`
    )
}