import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        font-family: "Noto Sans JP", sans-serif;
        font-weight: 300;
    }
`;

export const Wrapper = styled.div`
    max-width: 1536px;
    margin: 0 auto;
    padding: 0 16px;
    footer {
        display: flex;
        align-self: center;
        justify-content: center;
        color: white;
        font-family: "Noto Sans", sans-serif;
        a {
            margin-left: 6px;
            color: white;
        }
    }
`;