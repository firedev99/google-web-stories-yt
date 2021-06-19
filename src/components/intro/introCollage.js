import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { photos, videos } from "../data";
// props
import { ImageElement, VideoElement } from "../elements";
// styled-components
import { Wrapper, LeftSection, RightSection } from "./styles/collageStyles";

export default function IntroCollage() {
    const leftImages = photos.slice(0, 2);
    const rightImages = photos.slice(2, photos.length);
    const leftVideo = videos[0];
    const rightVideo = videos[2];
    console.log(leftVideo);

    useEffect(() => {
        const tl = gsap.timeline({
            delay: 1,
        });
        tl.fromTo(
            ".collage-element",
            { y: 300 },
            {
                y: 0,
                duration: 1,
                delay: (index) => {
                    if (index === 3) return 0;
                    return 0.2 * index;
                }
            });
    }, []);

    return (
        <Wrapper>
            <LeftSection>
                {leftImages.map((src, index) => (
                    <ImageElement key={`photo-collage-lf-${index}`} src={src} alt={`photo-collage-${index}`} />
                ))}
                <VideoElement src={leftVideo.videoSrc} poster={leftVideo.posterSrc} />
            </LeftSection>
            <RightSection>
                <VideoElement src={rightVideo.videoSrc} poster={rightVideo.posterSrc} />
                {rightImages.map((src, index) => (
                    <ImageElement key={`photo-collage-rg-${index + 2}`} src={src} alt={`photo-collage-${index + 2}`} />
                ))}
            </RightSection>
        </Wrapper>
    )
}
