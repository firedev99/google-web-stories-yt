import React, { useEffect, useRef } from 'react';
// hooks
import useView from "../../hooks/useView";
// styled-components
import { Wrapper, Frame } from "./styles/phoneStyles.js";
import frame from "../../assests/frame.png";
import { videos } from "../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PhoneBlock() {
    const mainVideo = videos[1];
    const phoneRef = useRef(null);
    const [videoRef, isVisible] = useView({
        root: null,
        margin: "0px",
        threshold: 0.5,
    });

    useEffect(() => {
        if (isVisible) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isVisible, videoRef]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useEffect(() => {
        const intro = () => {
            const tl = gsap.timeline();
            tl.fromTo(phoneRef.current, { y: 400 }, { y: 0, duration: 0.8, delay: 0.7 });
            return tl;
        }
        const stopTrigger = () => {
            const tl = gsap.timeline({
                delay: 0.8,
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: "top top",
                    end: "+=956",
                    pin: true,
                    scrub: true
                }
            })
            tl.to(phoneRef.current, { scale: 1.2 }, "+=0.1");
            tl.to(".intro_wrapper", {
                backgroundColor: "rgba(32, 33, 36, 1)",
                duration: 0.3,
            }, "-=0.3")
            return tl;
        }
        const master = gsap.timeline();
        master.add(intro());
        setTimeout(() => {
            master.add(stopTrigger());
        }, 1500);
    }, [])
    return (
        <Wrapper ref={phoneRef}>
            <Frame style={{ backgroundImage: `url(${frame})` }}>
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    loop
                    src={mainVideo.videoSrc}
                    poster={mainVideo.posterSrc}
                />
            </Frame>
        </Wrapper>
    )
}
