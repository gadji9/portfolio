import { FunctionComponent, useEffect, useRef } from "react";
import Template, { PreviewComponent } from "../Template";
import TaskIamge from "@/assets/task.png";
import trelloPreviewVideo from "@/assets/trello-preview.mp4";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = ["React", "OOP", "Jest"];
const link = "https://gadji9.github.io/Trello-clone-jest-class-implementation/";

const Trello: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.trello;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={TaskIamge}
            Preview={PreviewVideo}
            link={link}
            description={description}
        />
    );
};

const PreviewVideo: PreviewComponent = ({ startAnimation }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
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
