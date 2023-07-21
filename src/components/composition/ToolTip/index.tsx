// Externals
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "./index.css";

interface IToolTipProps {
    title: string;
    position: string;
    children: React.ReactNode;
}

const Tooltip: FunctionComponent<IToolTipProps> = ({
    title,
    position,
    children,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setState] = useState(false);
    const handleClick = ({ target }: MouseEvent) => {
        if (ref.current && ref.current.contains(target as Node)) {
            return;
        }
        setState(false);
    };

    useEffect(() => {
        document.addEventListener("mouseover", handleClick);
        return () => {
            document.removeEventListener("mouseover", handleClick);
        };
    }, []);

    return (
        <div
            className="container"
            data-testid="tooltip"
            ref={ref}
            onMouseOver={() => setState(true)}
            onMouseOut={() => setState(false)}
        >
            <div data-testid="tooltip-placeholder">{children}</div>
            {isVisible && (
                <div
                    className={"tooltipContent " + position}
                    data-testid="tooltip-content"
                >
                    <span className="arrow"></span>
                    {title}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
