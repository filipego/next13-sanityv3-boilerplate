import Link from "next/link"

import Marquee from "./Marquee"


function WorkTogether() {
    return (
        <div className="work-together pt-12">
            <Marquee darkBG={true}>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
                <Link href="/contact" className="heading-3">
                    Let's work together
                </Link>
                <span className="marquee__circle">•</span>
            </Marquee>
        </div>
    )
}

export default WorkTogether

