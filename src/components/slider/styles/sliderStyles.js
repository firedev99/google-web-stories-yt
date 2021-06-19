import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const LeftPart = styled.div`
    p {
        color: rgb(95, 99, 104, 1);
        font-size: 16px;
        max-width: 276px;
    }
`;
export const RightPart = styled.div`
    position: relative;
    height: 92vh;
    width: 96%;
    overflow: hidden;
    .active {
        opacity: 1;
    }
`;
export const Inner = styled.div`
    background-color: ${props => props.color};
    width: 100%;
    height: 100%;
    padding: 3rem;
    transition: all 0.5s;
    opacity: 0;
    position: absolute;
    top: 0;
    video {
        height: 100%;
        width: 100%;
    }
`;