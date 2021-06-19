import React from 'react';
import { Wrapper } from "./styles/headerStyles.js";

export default function IntroHeader() {
    const text = ("Stories meet their widest audience ever.").split("");
    const stories = text.slice(0, 7);
    const widest = text.slice(8, text.length);

    return (
        <Wrapper>
            <div className="wrap">
                <h1>
                    {stories.map((char, index) => (
                        <span className="stories" key={`stories-${index}`}>{char}</span>
                    ))}
                    {widest.map((char, index) => (
                        <span key={`widest-${index}`}>{char}</span>
                    ))}
                </h1>
            </div>
        </Wrapper>
    )
}
