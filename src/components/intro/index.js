import React, { useEffect, useRef } from 'react';
import gsap from "gsap"
// components
import IntroHeader from "./introHeader";
import IntroCollage from './introCollage';
import PhoneBlock from "./phone";
import ClientUsage from "./clients";
import IntroFooter from "./introFooter";
// styled-components
import { Wrapper, CollageContainer } from "./styles/introStyles";

export default function Intro() {
    const ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(ref.current, { autoAlpha: 1 });
    }, [])
    return (
        <Wrapper ref={ref}>
            <IntroHeader />
            <CollageContainer>
                <IntroCollage />
                <PhoneBlock />
            </CollageContainer>
            <ClientUsage />
            <IntroFooter />
        </Wrapper>
    )
}
