'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Container from '../Container'
import Button from '../Button'


function Hero() {

    let h1Ref = useRef(null);
    let pRef = useRef(null);
    let buttonsRef = useRef(null);
    let circleRef = useRef(null);

    const load = () => {

        let tl = gsap.timeline({
            ease: "power4.out"
        });

        tl.from(h1Ref.current.children, {
            autoAlpha: 0,
            delay: 1,
            y: 100,
            skewY: 10,
            duration: .5,
            stagger: {
                each: 0.3,
            }
        }, '-=.75')
            .from(pRef.current, {
                autoAlpha: 0,
                delay: 0,
                y: 100,
                skewY: 10,
                duration: .5,
            })
            .from(buttonsRef.current.children, {
                autoAlpha: 0,
                duration: .5,
                x: 60,
                skewY: 10,
                delay: 0.5,
                stagger: {
                    each: 0.5

                }
            }, '-=.75')
            .from(circleRef.current, {
                autoAlpha: 0,
                delay: 0.5,
                duration: 2,
            })

    }

    useEffect(() => {
        load()

    }, []);



    return (
        <>
            <section className="hero">
                <Container classes="p-tb-0">
                    <div className="hero__content">
                        <h1 ref={h1Ref}>
                            <span className='line-break each-line'>
                                I'm a <span className='special'> creative</span>,
                            </span>
                            <span className='line-break each-line'>
                                <span className='special'> reliable </span> and
                            </span>
                            <span className='line-break each-line'>
                                <span className='special'> professional </span>
                            </span>
                            <span className="each-line">
                                Designer & Developer.
                            </span>
                        </h1>

                        <p ref={pRef}>
                            I've been designing and coding websites for the last 17 years. I've worked with bigger companies and up-and-coming startups to successfully help them reach their full potential and attract new customers.
                        </p>
                        <div ref={buttonsRef} className="cta">
                            <Button ghost url="/contact">CONTACT</Button>
                        </div>
                    </div>
                </Container>
                <div ref={circleRef} className="text-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                        <title>Visit Site Link</title>
                        <defs>
                            <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                                <animateTransform
                                    attributeName="transform"
                                    begin="0s"
                                    dur="30s"
                                    type="rotate"
                                    from="0 250 250"
                                    to="360 250 250"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </defs>
                        <text dy="70" textLength="1220">
                            <textPath xlinkHref="#textcircle">Welcome to my site • Scroll for more •</textPath>
                        </text>
                    </svg>
                </div>
            </section></>
    )
}


export default Hero

