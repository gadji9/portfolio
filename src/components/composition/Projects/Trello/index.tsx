import { FunctionComponent, useEffect, useRef } from "react";
import Template, { PreviewComponent } from "../Template";
import TaskIamge from "@/assets/task.png";
import trelloPreviewVideo from "@/assets/trello-preview.mp4";

import "./index.css";

const technologies = "React, OOP";
const name = "Trello";
const description = "Trello copy with drag and drop";
const link = "https://gadji9.github.io/Trello-clone-jest-class-implementation/";

const Trello: FunctionComponent = () => {
    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={TaskIamge}
            Preview={PreviewVideo}
            size="full"
            link={link}
            description={description}
        />
    );
};

const PreviewVideo: PreviewComponent = ({ startAnimation }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    console.log(videoRef.current?.play());
    useEffect(() => {
        if (!videoRef.current) {
            return;
        }
        if (startAnimation) {
            videoRef.current.play();
        } else {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
        }
    }, [startAnimation]);

    return (
        <video
            className={`trello-preview-video ${startAnimation ? "move" : ""}`}
            muted
            ref={videoRef}
        >
            <source src={trelloPreviewVideo} type="video/mp4" />
        </video>
    );
};

export default Trello;
