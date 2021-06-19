import styled, { keyframes } from "styled-components/macro";

const splitText = keyframes`
    0% {
        bottom: -100%;
    }
    100%{
        bottom: 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 260px 0 260px 0;
    .wrap {
        text-align: center;
        margin: 0 auto;
        max-width: 656px;
        display: flex;
        h1 {
            overflow: hidden;
            color: rgb(32, 33, 36, 1);
            .stories {
                font-weight: 700;
                &:nth-child(7) {
                    margin-right: 12px;
                }
            }
            span {
                font-weight: 400;
                line-height: 0.9em;
                animation: ${splitText} 1s ease;
                position: relative;
                font-size: 64px;
                letter-spacing: -1.2px;
            }
        }
    }
`;