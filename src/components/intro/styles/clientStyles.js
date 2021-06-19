import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    max-width: 1366px;
    padding: 396px 0;
    position: relative;
    color: rgba(255, 255, 255, 1);
    @media (max-width: 1190px) {
        margin-top: 624px;
        justify-content: space-around;
    }
`;

export const BriefWrapper = styled.div`
    width: 392px;
    font-size: 20px;
    padding-left: 52px;
    font-weight: 400;
`;

export const Logos = styled.div`
    display: flex;
    flex-direction: column;
    p {
        font-size: 16px;
        margin-left: 10px;
        margin-bottom: 14px;
        font-weight: 400;
    }
`;

export const Display = styled.div`
    display: grid;
    column-gap: 24px;
    row-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    max-width: 400px;
    img {
        width: 100%;
        height: 100%;
    }
`;