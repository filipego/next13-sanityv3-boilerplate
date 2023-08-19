'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Container from '../components/Container'


function Contact() {
    const form = useRef();

    const localTime = new Date();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h2wft66', 'template_7pquv6n', form.current, '54HvWBDIv_jfYpjoD')
            .then((result) => {
                // console.log(result.text);


            }, (error) => {
                // console.log(error.text);
            });

        notify()
        e.target.reset();
    };

    return (
        <div>
            <div className="contact">
                <Container>
                    <h2 className="heading-3">Got a project?
                        <span>Let's work together</span></h2>

                    <div className="contact__content container--inner">
                        <div className="contact__form">
                            <h2 className="heading-2">Contact Form</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name">What's your name?</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="John Doe *"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="email">What's your Email?</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="jonhdoe@doe.com *"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="business">What's your Business name?</label>
                                    <input
                                        id="business"
                                        type="text"
                                        name="business"
                                        placeholder="John & Doe" />
                                </div>
                                <div>
                                    <label htmlFor="service">What's services are you looking for?</label>
                                    <input
                                        id="service"
                                        type="text"
                                        name="service"
                                        placeholder="Web Design, Web Development ..." />
                                </div>
                                <div className="text-area">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Hi Filipe, can you please help me with ... *"
                                        required />
                                </div>
                                <span className="btn btn--ghost">
                                    <span className="hover"></span>
                                    <input type="submit" value="Send" />
                                </span>


                            </form>
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