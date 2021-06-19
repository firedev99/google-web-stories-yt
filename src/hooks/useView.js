import { useEffect, useRef, useState } from "react";

export default function useView(options) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callback = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const current = containerRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [containerRef, options]);

    return [containerRef, isVisible];
}
