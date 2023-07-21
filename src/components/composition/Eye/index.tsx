import { FunctionComponent, useEffect, useRef } from "react";
import "./index.css";

interface IEyeProps {
    withEyeLash?: boolean;
}

const Eye: FunctionComponent<IEyeProps> = () => {
    const eyeBallRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("mousemove", eyeMover);

        return () => {
            document.removeEventListener("mousemove", eyeMover);
        };
    }, []);

    const eyeMover = (event: MouseEvent) => {
        if (!eyeBallRef.current) {
            return;
        }
        const eyeX =
            eyeBallRef.current.getBoundingClientRect?.().left +
            eyeBallRef.current.clientWidth / 2;

        const eyeY =
            eyeBallRef.current.getBoundingClientRect().top +
            eyeBallRef.current.clientHeight / 2;

        const x = event.clientX;
        const y = event.clientY;

        const radian = Math.atan2(x - eyeX, y - eyeY);
        const rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
        eyeBallRef.current.style.transform =
            "rotate(" + rotationDegrees.toString() + "deg)";
    };

    return (
        <>
            <div className="eye-wrapper">
                <div className="eyelash-wrapper">
                    <div className="eyelash"></div>
                    <div className="eyelash"></div>
                    <div className="eyelash"></div>
                </div>
                <div ref={eyeBallRef} className="eye">
                    <div className="eyeball"></div>
                </div>
            </div>
        </>
    );
};

export default Eye;
