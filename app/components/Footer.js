import Link from "next/link"
import Container from "./Container"

function Footer() {

    const date = new Date();
    const year = date.getFullYear();


    return (
        <footer className="footer">
            <Container classes="footer__content grid-col-3">
                <div className="footer__contact-info">
                    <h2 className="heading-2">Contact Info</h2>
                    <p className='small p-white'>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
                    <p className='small p-white'>E: <a href="mailto:filipego@gmail.com">filipego@gmail.com</a></p>
                </div>
                <div>
                    <h2 className="heading-2">Current availabilty</h2>
                    <p className='small p-white'>I usually work on several projects but I'll be happy to discuss new opportunities. </p>
                    <Link href="/contact">
                        Let's get in touch!
                    </Link>
                </div>
                <ul className="footer__social">
                    <li> <a href="#" target='_blank' rel="noopener noreferrer">TWITTER</a></li>
                    <li> <a href="#" target='_blank' rel="noopener noreferrer">LINKEDIN</a></li>
                    <li> <a href="#" target='_blank' rel="noopener noreferrer">GITHUB</a></li>
                    <li> <a href="#" target='_blank' rel="noopener noreferrer">RESUME</a></li>
                </ul>
            </Container>

            <Container classes="footer__bottom" noPadding>
                <p className="footer__copyright">© Filipe Valente 2007 — {year}</p>
                <Link href="#main-container">
                    (BACK TO TOP)
                </Link>
                <p className="footer__rights">All RIGHTS RESERVED</p>
            </Container>
        </footer>
    )
}

export default Footer