
import { getPortfolioItem, getPortfolios } from "@/sanity/sanity-utils"

import Link from 'next/link'

import { PortableText } from '@portabletext/react'
import Image from "next/image";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import WorkTogether from "@/app/components/WorkTogether";


export default async function PotfolioItemPage({ params }) {
    const slug = params.project;
    const project = await getPortfolioItem(slug)
    const portfolios = await getPortfolios()

    const { cover, title, clientInfo, client, role, techUsed, url, moreImages, videoUrl, approach, challenge, portfolio } = project

    return (
        <>
            <div className="portfolio-single">

                {/* Cover */}

                <div className="portfolio-single__cover-image">
                    <Image src={cover} alt={title} width={1260} height={853} />
                </div>

            </div>


            {/* Project Info */}

            <Container>
                <div className="portfolio-single__project-name">
                    <h2 className='heading-3'>{title}</h2>
                </div>
                <div className="portfolio-single__project-info container--inner">
                    <div>
                        <div className="portfolio-single__services">
                            <h2 className="heading-2">Services</h2>
                            <ul>
                                {role.map((r) => (
                                    <li key={r} className='pill'>{r}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='portfolio-single__tech-used'>
                            <h2 className='heading-2'>Tech Used</h2>
                            <ul>
                                {techUsed.map((tech) => (
                                    <li key={tech} className='pill'>{tech}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='portfolio-single__client'>
                            <h2 className='heading-2'>Client</h2>
                            <p>{client}</p>
                        </div>
                    </div>

                    <div>
                        <div className='portfolio-single__client-info'>
                            <PortableText value={clientInfo} />
                        </div>

                        {url && <div>
                            <a className='btn' href={url} target="_blank" rel="noreferrer">
                                <div className="hover"></div>
                                <span>Visit Website</span>
                            </a>
                        </div>
                        }

                    </div>
                </div>
            </Container>

            {/* Video */}

            {/* {videoUrl &&
                <Container classes='portfolio-single__video'>
                    {videoRef && <video ref={videoRef} width="1920" height="1080" playsInline loop muted>
                        <source src={videoUrl} type="video/mp4" />
                    </video>}
                </Container>

            } */}


            {/* Challenge and Approach */}

            <Container classes="portfolio-single__process">
                <div className="grid-col-2 container--inner">
                    <div className="challenge">
                        <h2 className="heading-2">Challenge</h2>
                        <PortableText value={challenge} />
                    </div>
                    <div className="approach">
                        <h2 className="heading-2">Approach</h2>
                        <PortableText value={approach} />
                    </div>
                </div>
            </Container>

            {/* More Images */}

            {moreImages &&
                <Container classes='portfolio-single__more-images'>
                    <ul>
                        {moreImages.map((moreImage, i) => (

                            <li key={i}>
                                <Image src={moreImage} alt={title} width={640} height={358} />

                            </li>
                        ))}
                    </ul>
                </Container>

            }


            <Container classes="portfolio-single__next">
                <h2 className="heading-2">Next Project</h2>
                <div className="portfolio-single__next__link">
                    {portfolios.map((p, i) => {
                        if (p.slug === slug) {
                            if (i < (portfolios.length - 1)) {
                                const index = i + 1
                                return (
                                    <div key={i}>
                                        <Link href={`/portfolio/${portfolios[index].slug}`}>
                                            <h3 className="heading-3">{portfolios[index].title}</h3>
                                        </Link>
                                    </div>
                                )
                            } else {
                                const index = 0
                                return (
                                    <div key={i}>
                                        <Link href={`/portfolio/${portfolios[index].slug}`}>
                                            <h3 className="heading-3">{portfolios[index].title}</h3>
                                        </Link>
                                    </div>
                                )
                            }
                        }
                    })}
                </div>
                <div className='portfolio-single__next__btn'>
                    <Button ghost url="/#portfolio">ALL PROJECTS</Button>
                </div>
            </Container>



            <WorkTogether />





        </>
    )
}

