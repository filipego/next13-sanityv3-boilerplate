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
            slug,
            "image": thumbImage.asset->url,
            "cover": cover.asset->url,
            clientInfo,
            client,
            role,
            techUsed,
            url,
            challenge,
            approach,
            color
        }`
    )
}