import React, { useLayoutEffect } from 'react';
import styled from "styled-components/macro";
// hooks
import useWindowSize from '../hooks/useWindowSize';

const Wrapper = styled.div`
    min-height: 94vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .yt {
        margin: 8px;
        font-weight: 700;
    }
`;

export default function Requirement() {
    const size = useWindowSize();
    useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent Scrolling on mount
        document.body.style.overflow = "hidden";
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
    }, []);

    return (
        <Wrapper>
            <h3>To visit this site your device's screen needs to be greater than 1366px</h3>
            <p>{`your device's screen is ${size.width}px`}</p>
            <p className="yt">YOUTUBE VIDEO COMING SOON</p>
            <a aria-hidden="false" target="_blank" rel="noreferrer" href="https://stories.google/">visit original website</a>
        </Wrapper>
    )
};
