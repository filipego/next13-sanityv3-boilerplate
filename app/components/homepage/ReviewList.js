'use client'

import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { useState } from 'react';


function ReviewsList({ website, websiteUrl, title, image, services, body, i }) {

    const [selected, setSelected] = useState(0)

    const toggle = (i) => {
        console.log(i, selected)
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }


    return (
        <div
            className='reviews__items__item container--inner'
            key={i}
        >
            <div className='reviews__header'>
                <a className="heading-3" href={websiteUrl} target='_blank' rel="noopener noreferrer">{website}</a>
                <h3 className='heading-3'>{title}</h3>
                <div onClick={() => toggle(i)} className="reviews__header__toggle">{selected === i ? '-' : '+'}</div>
            </div>
            <div className={selected === i ? 'reviews__content grid-col-2 show' : 'reviews__content grid-col-2'}>
                <div className="reviews__services">
                    <h4 className="heading-4">Services</h4>
                    <ul>
                        {services?.map((service) => (
                            <li className='pill' key={service + i}>{service}</li>
                        ))}
                    </ul>
                </div>
                <div className="reviews__review">
                    <Image src={image} alt={title} width='240' height="240" />
                    <PortableText value={body} />
                </div>

            </div>
        </div>
    )
}

export default ReviewsList