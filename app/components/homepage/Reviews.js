import { getReviews } from "@/sanity/sanity-utils"
import ReviewsList from './ReviewList'
import Container from "../Container"


export default async function Reviews() {
    const reviews = await getReviews()
    return (
        <Container classes="reviews">
            <h2 className="heading-2">Client Reviews</h2>
            <div className='reviews__items'>
                {reviews.map((review, index) => (
                    <ReviewsList
                        website={review.website}
                        websiteUrl={review.websiteUrl}
                        title={review.title}
                        services={review.services}
                        image={review.image}
                        body={review.body}
                        key={index}
                        i={index}
                    />
                ))}
            </div>
        </Container>
    )
}

