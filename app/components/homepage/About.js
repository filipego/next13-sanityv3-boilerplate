import Link from "next/link";
import Image from 'next/image'
import Marquee from "../Marquee";
import Container from '../Container'
import Button from '../Button'

function About() {
    return (
        <>
            <div id="about" className="about section">
                <Container classes="about__title">
                    <h2 className="heading-2">About Me</h2>
                </Container>

                <Marquee>
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/FilipeValenteProfilePicture_8mzu3RaUsJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652848862104"
                        alt="Filipe Valente Profile Picture"
                        width={101}
                        height={116}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/filipe-valente-profile-circle_YQMURHXaH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661818019249"
                        alt="Filipe Valente Profile Picture"
                        width={100}
                        height={100}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/FilipeValenteProfilePicture_8mzu3RaUsJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652848862104"
                        alt="Filipe Valente Profile Picture"
                        width={101}
                        height={116}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/filipe-valente-profile-circle_YQMURHXaH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661818019249"
                        alt="Filipe Valente Profile Picture"
                        width={100}
                        height={100}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/FilipeValenteProfilePicture_8mzu3RaUsJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652848862104"
                        alt="Filipe Valente Profile Picture"
                        width={101}
                        height={116}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/filipe-valente-profile-circle_YQMURHXaH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661818019249"
                        alt="Filipe Valente Profile Picture"
                        width={100}
                        height={100}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/FilipeValenteProfilePicture_8mzu3RaUsJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652848862104"
                        alt="Filipe Valente Profile Picture"
                        width={101}
                        height={116}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/filipe-valente-profile-circle_YQMURHXaH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661818019249"
                        alt="Filipe Valente Profile Picture"
                        width={100}
                        height={100}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/FilipeValenteProfilePicture_8mzu3RaUsJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652848862104"
                        alt="Filipe Valente Profile Picture"
                        width={101}
                        height={116}
                    />
                    Filipe Valente
                    <Image
                        src="https://ik.imagekit.io/ec3987k0v/Filipe_Valente_Site_V3/filipe-valente-profile-circle_YQMURHXaH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661818019249"
                        alt="Filipe Valente Profile Picture"
                        width={100}
                        height={100}
                    />
                </Marquee>

                <Container>
                    <div className="grid-col-2 container--inner about__bio">
                        <div>
                            <p>I'm a Front-End Developer. I'm of Portuguese decent born in Luxembourg.</p>
                            <p>I speak 6 languages. I moved to the United States in 2005. In 2007 I started my Front-End Developer journey and have loved every moment of it.</p>
                            <p>I realized how much I loved creating web projects, when one of my early work was displayed in Time Square. </p>
                        </div>
                        <div>
                            <p>My clients range from startups to well-known bigger companies. My goal is to help my clients successfully achieve a strong virtual presence, while being a partner they can count on.</p>
                            <p>I specialize in designing and coding responsive websites.</p>
                            <p>Sounds like what you are looking for? Want to drop me a line? If so this button will take you to the contact form.</p>
                        </div>
                    </div>
                    <div className="cta container--inner">
                        <Button ghost url="/contact">CONTACT</Button>
                    </div>
                </Container>
            </div>

        </>

    )
}

export default About