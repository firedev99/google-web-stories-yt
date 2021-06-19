import React from 'react';
import { logos } from "../data";
// styled-components
import { Wrapper, BriefWrapper, Logos, Display } from "./styles/clientStyles";

export default function ClientUsage() {
    return (
        <Wrapper>
            <BriefWrapper>
                <p>The tappable story format has never been more accessible—to creators and readers alike. See what happens when Google brings stories to the open web.</p>
            </BriefWrapper>
            <Logos>
                <p>Making an impact at</p>
                <Display>
                    {logos.map((logo, index) => (
                        <img key={`logo-${index}`} src={logo} alt={`google-collaborators-${index}`} />
                    ))}
                </Display>
            </Logos>
        </Wrapper>
    )
}
