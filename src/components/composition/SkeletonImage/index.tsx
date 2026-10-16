import { FunctionComponent, useLayoutEffect, useRef, useState } from "react";

import "./index.css";

interface ISkeletonImageProps {
    src: string;
    alt?: string;
    className?: string;
    /** natural aspect ratio of the image ("width / height"), reserves the box while it loads */
    ratio?: string;
    /** tailwind classes for the placeholder, e.g. border radius to match the image */
    skeletonClassName?: string;
    width?: number;
    loading?: "lazy" | "eager";
}

const SkeletonImage: FunctionComponent<ISkeletonImageProps> = ({
    src,
    alt = "",
    className,
    ratio,
    skeletonClassName,
    width,
    loading = "lazy",
}) => {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        // a cached image can be complete before onLoad is ever attached
        if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
            setLoaded(true);
        }
    }, []);

    return (
        <span
            className={`skeleton-image ${
                loaded ? "skeleton-image_loaded" : ""
            }`}
        >
            <span
                className={`skeleton-image__shimmer ${skeletonClassName ?? ""}`}
            />
            <img
                ref={imgRef}
                className={`skeleton-image__img ${className ?? ""}`}
                src={src}
                alt={alt}
                width={width}
                loading={loading}
                style={ratio ? { aspectRatio: ratio } : undefined}
                onLoad={() => setLoaded(true)}
            />
        </span>
    );
};

export type { ISkeletonImageProps };
export default SkeletonImage;
