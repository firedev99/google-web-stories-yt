import React, { useEffect } from 'react';
import gsap from "gsap";
// hooks
import useView from '../../hooks/useView';
// components 
import StoriesIntro from './storiesIntro';
import FloatingElements from './floatingElements';
// styled-components
import { Wrapper } from "./styles/storiesStyles";

export default function StoriesMesh() {
    const [ref, isVisible] = useView({
        root: null,
        margin: "0px",
        threshold: 0.1,
    })
    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0.3,
        });
        tl.fromTo(
            ".intro_wrapper",
            { backgroundColor: "white" },
            {
                backgroundColor: isVisible ? "rgba(32, 33, 36, 1)" : "rgba(255, 255, 255, 1)",
                duration: 0.3
            })
    }, [isVisible])

    return (
        <Wrapper ref={ref}>
            <StoriesIntro />
            <FloatingElements />
        </Wrapper>
    )
}
