import styled from "styled-components/macro";

export const Wrapper = styled.div`
    position: absolute;
    /* width: 25vw; */
    width: 352px;
    height: 650px;
    top: -15%;
    left: 50%;
    transform: translateX(-37.7%) scale(1.4);
    @media (max-width: 1080px) {
        display: none;
    }
`;
export const Frame = styled.div`
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    video {
        position: absolute;
        width: 64%;
        height: auto;
        border-radius: 15px;
        top: 6%;
        left: 9%;
    }
    @media (max-width: 1080px) {
        video {
            top: 15%;
        }
    }
`;