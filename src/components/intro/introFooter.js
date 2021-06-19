import React, { useEffect } from 'react';
import gsap from "gsap";
// hooks
import useView from "../../hooks/useView";
// styled-components
import { Wrapper } from "./styles/footerStyles";

export default function IntroFooter() {
    const [wrapperRef, isVisible] = useView({
        root: null,
        margin: "0px",
        threshold: 0.27,
    });

    useEffect(() => {
        if (isVisible) {
            const tl = gsap.timeline({
                delay: 0.3,
            })
            tl.to(".intro_wrapper", { backgroundColor: "white", duration: 0.4 });
        }
    }, [isVisible]);

    return (
        <Wrapper ref={wrapperRef}>
            <h1>Visual stories that feel like yours, because they are.</h1>
        </Wrapper>
    )
}
