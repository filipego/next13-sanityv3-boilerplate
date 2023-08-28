import { getPortfolios } from "@/sanity/sanity-utils"
import PortfolioList from "./PortfolioList"
import Container from "../Container"


export default async function Portfolio() {
    const portfolios = await getPortfolios()
    return (
        <div id="portfolio" className="portfolio dark">
            <Container classes="full-bleed">
                <h2 className='heading-2'>Selected Projects</h2>
                <div className="portfolio__content-wrapper">
                    <div className="portfolio__img-wrapper">
                        <div className="portfolio__img-placeholder"></div>
                    </div>
                    <ul className='portfolio__items'>
                        {portfolios.map((p, index) => (
                            <PortfolioList

                                currentSlug={p.slug}
                                title={p.title}
                                image={p.image}
                                key={index}
                                i={index}
                            />
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

