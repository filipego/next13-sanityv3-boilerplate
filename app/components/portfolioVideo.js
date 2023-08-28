'use client'

import { useEffect, useRef } from 'react';

import Container from "./Container"


export default function PortfolioVideo({ videoUrl }) {

    // Autoplay Video Start

    const videoRef = useRef(null);
    const playVideo = () => {
        videoRef &&
            videoRef.current &&
            videoRef.current.play().catch(error => {
                // console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        playVideo();
    }, []);

    // Autoplay Video End

    return (
        <>
            {videoUrl &&
                <Container classes='portfolio-single__video'>
                    {videoRef && <video ref={videoRef} width="1920" height="1080" playsInline loop muted>
                        <source src={videoUrl} type="video/mp4" />
                    </video>}
                </Container>

            }
        </>
    )
}
