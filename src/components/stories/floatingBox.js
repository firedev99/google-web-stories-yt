import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components/macro";

export const Container = styled.div`
    width: 375px;
    position: absolute;
    border-radius: 8px;
    a {
        height: 100%;
        width: 100%;
        img {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media(max-width: 1456px) {
        width: 292px !important;
        height: 525px !important;
        /* position: initial !important;
        width: 212px !important;
        height: 300px !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        display: flex;
        margin: 0 16px;
        &:nth-child(4), &:nth-child(6),  &:nth-child(8),  &:nth-child(10), &:last-child {
            a {
                display: none;
            }
        }
        a {
            position: initial !important;
            top: 0 !important;
        } */
    }
`;

export default function FloatingBox({ index, top, left, right, height, width, linkURL, imageSrc, float }) {
    const ref = useRef(null);
    const [position, setPosition] = useState(0);

    const handleScroll = () => {
        const posY = ref.current && ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        setPosition(offset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <Container
            ref={ref}
            style={{ top, left, right, height, width }}
        >
            <a aria-hidden="false" target="_blank" rel="noreferrer" href={linkURL} style={{ backgroundColor: 'yellow', width: "inherit", height: "inherit", transform: float ? `translateY(${position / 16}px)` : `none`, position: "absolute", top: -380, borderRadius: "8px" }}>
                <img src={imageSrc} alt={`stories-idx-${index}`} />
            </a>
        </Container>
    )
}
