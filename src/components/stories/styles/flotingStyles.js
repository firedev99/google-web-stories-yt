import styled from "styled-components/macro";

export const Wrapper = styled.div`
    position: relative;
    min-height: 2680px;
    display: flex;
    overflow: hidden;
    
    @media(max-width: 1456px) {
        min-height: 2556px;
        overflow: initial;
        margin-top: -124px;
    }
`;