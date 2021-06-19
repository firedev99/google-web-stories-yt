import React, { useEffect } from 'react'
import styled from "styled-components/macro";
// hooks
import useView from '../../hooks/useView';

const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8rem;
    height: 80vh;
    font-family: "Noto Sans JP", sans-serif;
    transition: all 0.4s;
    .intro {
        color: rgba(0, 0, 0, 1);
        margin: 64px 0;
        max-width: 364px;
        font-size: 2.32vw;
        line-height: 1.12em;
    }
    h3 {
        position: relative;
        font-size: 2vw;
        color: rgb(32, 33, 36, 1);
        margin-bottom: 20px;
        &:before {
            content: '';
            top: -13px;
            left: 2px;
            position: absolute;
            width: 36px;
            height: 3px;
            background: ${props => props.color};
        }
    }
`;

export default function FeatureSlider({ title, description, index, setActiveIndex, color }) {
    const [ref, isVisible] = useView({
        root: null,
        margin: "0px",
        threshold: 0.5,
    });

    useEffect(() => {
        if (isVisible) {
            setActiveIndex(index);
        }
    }, [isVisible, index, setActiveIndex])
    return (
        <Wrapper color={color} ref={ref} style={{ opacity: isVisible ? "1" : "0.5" }}>
            {index === 0 && <div className="intro">What hosting your own Web Story makes possible:</div>}
            <h3>{title}</h3>
            <p>{description}</p>
        </Wrapper>
    )
}
