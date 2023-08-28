import Container from '../components/Container'
import Form from '../components/Form';

export const metadata = {
    title: 'Contact Page - Filipe Valente Creative Web Developer',
    description: "Filipe Valente's Contact Page",
}


function Contact() {

    const localTime = new Date();

    return (
        <div>
            <div className="contact">
                <Container>
                    <h2 className="heading-3">Got a project?
                        <span>Let's work together</span></h2>

                    <div className="contact__content container--inner">
                        <div className="contact__form">
                            <h2 className="heading-2">Contact Form</h2>
                            <Form />
                        </div>
                        <div className='contact__info-content'>
                            <div className="contact__info">
                                <h2 className="heading-2">Contact Info</h2>
                                <p>Reach out at any time, I'd love to hear from you. Email or chat are my preferred methods of communication, especially since we may be a few time zones away.</p>
                            </div>
                            <div className="contact__local-time">
                                <h2 className="heading-2">Local Time</h2>
                                <p>{localTime.toLocaleString('en-US', {
                                    timeZone: 'America/New_York',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    timeZoneName: 'short',
                                })} - New Jersey, USA</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contact


// Contact.pageClass = 'contact-page'