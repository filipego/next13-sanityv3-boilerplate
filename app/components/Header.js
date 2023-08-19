'use client'


import Link from "next/link"

import React, { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'

import { gsap } from "gsap";



function Header() {
    const router = useRouter()

    let logoRef = useRef(null);
    let menuRef = useRef(null);

    const load = () => {

        let tl = gsap.timeline();

        tl.from(logoRef.current, {
            autoAlpha: 0,
            duration: .5,
            y: -10,
            delay: 2.7
        })
            .from(menuRef.current.children, {
                autoAlpha: 0,
                duration: .5,
                y: -10,
                delay: 0.5,
                stagger: {
                    each: 0.2,
                }
            }, '-=.75')

    }

    useEffect(() => {
        load()

    }, []);

    return (
        <header className="header">
            <div className="header__content">
                <Link href="/" ref={logoRef} className="logo">
                    filipe valente
                </Link>
                <nav className="main-nav">
                    <ul ref={menuRef}>
                        <li><Link href="/" className={router.pathname === "/" ? "active" : ""}>Home</Link></li>
                        <li> <Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header