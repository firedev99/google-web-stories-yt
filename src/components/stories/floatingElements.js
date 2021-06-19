import React from 'react'
import { floatingData } from '../data';
// components
import FloatingBox from './floatingBox';
import { Wrapper } from './styles/flotingStyles';

export default function FloatingElements() {
    return (
        <Wrapper>
            {floatingData.map((data, index) => (
                <FloatingBox
                    key={`parallax-url-${index}`}
                    index={index}
                    height={data.height}
                    width={data.width}
                    top={data.top}
                    left={data.left}
                    right={data.right}
                    imageSrc={data.imageSrc}
                    linkURL={data.linkURL}
                    float={data.float}
                />
            ))}
        </Wrapper>
    )
}
