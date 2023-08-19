'use client'

import { useRouter } from 'next/navigation'
import gsap from 'gsap';



function PortfolioList({ slug, currentSlug, title, image, i }) {
    const router = useRouter();

    let mouseX = 0;
    let mouseY = 0;


    const movePortfolio = (e) => {
        mouseX = e.clientX,
            mouseY = e.clientY;

        let tl = gsap.timeline();

        tl.to(".portfolio__img-wrapper", {
            duration: 1,
            x: mouseX,
            y: mouseY,
            ease: "easeInOut"
        })
    }

    const linkHover = ((e) => {
        let imgSrc = e.target.dataset.src;
        let tl = gsap.timeline();

        if (imgSrc) {
            tl.set(".portfolio__img-placeholder", {
                css: { backgroundImage: `url(${imgSrc})` }
            }).to(".portfolio__img-wrapper", {
                autoAlpha: 1,
                scale: 1
            });
        }
    })

    const mouseLeave = (() => {
        gsap.to(".portfolio__img-wrapper", {
            autoAlpha: 0,
            scale: .3
        });
    })

    return (
        <li
            className='portfolio__item container--inner'
            onClick={() => router.push(`/portfolio/${currentSlug}`)}
            onMouseMove={(e) => movePortfolio(e)}
            onMouseEnter={(e) => linkHover(e)}
            onMouseLeave={() => mouseLeave()}
            data-src={image}
            key={i}
        >
            <div className='portfolio__item__text'>
                <h3 className='heading-3 heading-3--light'>{title}</h3>
            </div>

        </li>
    )
}

export default PortfolioList