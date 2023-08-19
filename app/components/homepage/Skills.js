import Container from "../Container";
import Marquee from "../Marquee";

function Skills() {
    return (
        <div className="skills dark">
            <Container classes="full-bleed">
                <h2 className="heading-2">What I Use</h2>
            </Container>

            <div className="skills__content p-tb-12">
                <Marquee darkBG={true}>
                    <span className="marquee__circle">•</span> Web Development <span className="marquee__circle">•</span> Web Design <span className="marquee__circle">•</span> React.js/Next.js <span className="marquee__circle">•</span> Astro <span className="marquee__circle">•</span> WordPress <span className="marquee__circle">•</span> Sanity CMS <span className="marquee__circle">•</span> Tailwind CSS <span className="marquee__circle">•</span> Firebase <span className="marquee__circle">•</span> GSAP <span className="marquee__circle">•</span> Framer Motion
                </Marquee>
                <Marquee darkBG={true} reverse={true}>
                    <span className="marquee__circle">•</span> AdobeXD <span className="marquee__circle">•</span> Figma <span className="marquee__circle">•</span> VS Code <span className="marquee__circle">•</span> Mac <span className="marquee__circle">•</span> Cyberduck <span className="marquee__circle">•</span> Photoshop <span className="marquee__circle">•</span> Git/Github

                    <span className="marquee__circle">•</span>
                    AdobeXD <span className="marquee__circle">•</span> Figma <span className="marquee__circle">•</span> VS Code <span className="marquee__circle">•</span> Mac <span className="marquee__circle">•</span> Cyberduck <span className="marquee__circle">•</span> Photoshop <span className="marquee__circle">•</span> Git/Github

                    <span className="marquee__circle">•</span>
                    AdobeXD <span className="marquee__circle">•</span> Figma <span className="marquee__circle">•</span> VS Code <span className="marquee__circle">•</span> Mac <span className="marquee__circle">•</span> Cyberduck <span className="marquee__circle">•</span> Photoshop <span className="marquee__circle">•</span> Git/Github

                </Marquee>
            </div>

        </div>

    )
}

export default Skills