import React from "react";
import { useEffect } from "react";
import useView from "../hooks/useView";

export const VideoElement = ({ src, poster }) => {
    const [ref, isVisible] = useView({
        root: null,
        margin: "0px",
        threshold: 0.4,
    });

    useEffect(() => {
        if (isVisible) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isVisible, ref])
    return (
        <video
            ref={ref}
            className="collage-element"
            muted
            playsInline
            loop
            src={src}
            poster={poster}
        />
    )
};

export const ImageElement = ({ src, alt }) => {
    return (
        <img className="collage-element" src={src} alt={alt} />
    )
};