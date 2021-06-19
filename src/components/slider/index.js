import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { meshData } from '../data';
// components
import FeatureSlider from './featureSlider';
// styled-components
import { Wrapper, LeftPart, RightPart, Inner } from "./styles/sliderStyles";

function vw(value) {
    const width = Math.max(document.documentElement.clientWidth, window.innerHeight || 0);
    return (value * width) / 100;
}

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const wrapperRef = useRef(null);
    const slidesRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])

    useEffect(() => {
        function stopTrigger() {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: slidesRef.current,
                    start: "50% 50%",
                    end: () => wrapperRef.current && `+=${wrapperRef.current.offsetHeight - vw(41)}`,
                    pin: true,
                    scrub: true,
                }
            })
            return tl;
        };
        const master = gsap.timeline();
        setTimeout(() => {
            master.add(stopTrigger());
        }, 1000);
    }, [])

    return (
        <Wrapper ref={wrapperRef}>
            <LeftPart>
                {meshData.map((data, index) => (
                    <FeatureSlider
                        key={`slider-content-${index}`}
                        index={index}
                        setActiveIndex={setActiveIndex}
                        title={data.title}
                        description={data.description}
                        color={data.color}
                    />
                ))}
            </LeftPart>
            <RightPart ref={slidesRef}>
                {meshData.map((data, index) => (
                    <Inner key={`slider-${index}`} color={data.color} className={activeIndex === index && "active"}>
                        <video
                            playsInline
                            loop
                            autoPlay
                            muted
                            src={data.videoSrc}
                        />
                    </Inner>
                ))}
            </RightPart>
        </Wrapper>
    )
}
