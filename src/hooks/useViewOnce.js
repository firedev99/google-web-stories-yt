import { useEffect, useRef, useState } from "react";

export default function useViewOnce(options) {
    const containerRef = useRef(null);
    const [onView, setOnView] = useState(false);

    const callback = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setOnView(true);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        const current = containerRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [containerRef, options]);

    return [containerRef, onView];
}
