import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 37% 1fr 37%;
    margin: 0 auto;
    margin-bottom: 17vh;
    video, img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    @media(max-width: 1409px) {
        grid-template-columns: 30% 1fr 30%;
    }
`;
export const LeftSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-area: 1 / 1 / span 1 / span 1;
    column-gap: 20px;
    /* height: 400px; */
    .collage-element {
        border-radius: 15px;
        overflow: hidden;
        grid-area: 2 / 2 / span 5 / span 1;
        &:first-child {
            margin-top: -24px;
            grid-area: 2 / 1 / span 5 / span 1;
        }
        &:last-child {
            grid-area: 1 / 3 / span 5 / span 1;
        } 
    }
    @media (max-width: 1409px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        row-gap: 32px;
        .collage-element {
            height: 224px;
            width: 140px;
            grid-area: 2 / 2 / span 3 / span 1; 
            &:first-child {
                grid-area: 4 / 3 / span 5 / span 1;
            }
        }
    } 
`;
export const RightSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-area: 1 / 3 / span 1 / span 1;
    column-gap: 20px;
    /* height: 400px; */
    .collage-element {
        border-radius: 15px;
        overflow: hidden;
        grid-area: 2 / 2 / span 5 / span 1;
        &:first-child {
            grid-area: 1 / 1 / span 5 / span 1;
        }
        &:last-child {
            margin-top: -24px;
            grid-area: 2 / 3 / span 6 / span 1;
        }
    }
    @media (max-width: 1409px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr);
        column-gap: 0;
        .collage-element {
            height: 224px;
            width: 140px;
            margin-left: -42px;
            grid-area: 2 / 2 / span 3 / span 1; 
            &:first-child {
                margin: 0;
                grid-area: 1 / 1 / span 3 / span 1;
            }
            &:last-child {
                margin: 0;
                margin-top: -40px;
                grid-area: 4 / 1 / span 3 / span 1;
            }
        }
    } 
`;