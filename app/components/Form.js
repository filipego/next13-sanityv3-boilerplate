'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {

    const form = useRef();

    const notify = () => toast.success("Thank you, your message has been sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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
        <>
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
        </>
    )
}

export default Form