import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

export async function getReviews() {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'reviews']{
            title,
            website,
            websiteUrl,
            "image": thumbImage.asset->url,
            body,
            services
        }`
    )
}

export async function getPortfolios() {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'portfolio']{
            title,
            "slug": slug.current,
            "image": thumbImage.asset->url,
            color
        }`
    )
}

export async function getPortfolioItem(slug) {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'portfolio' && slug.current == $slug][0]{
            title,
            "cover": cover.asset->url,
            "moreImages":   moreImages[].asset->url ,
            "slug": slug.current,
            clientInfo,
            client,
            role,
            techUsed,
            url,
            videoUrl,
            challenge,
            approach,
            color
        }`,
        { slug }
    )
}