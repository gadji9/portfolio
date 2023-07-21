import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SploverImg from "@/assets/splover.png";
import Dumbbell from "@/assets/dumbbell.png";

import "./index.css";

const technologies = "React, tailwind, mobx, equiring";
const name = "Splover";
const description = "Platforms, trainings marketplace";
const link = "https://splover.ru/";

const Splover: FunctionComponent = () => {
    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={Dumbbell}
            Preview={SploverPreview}
            size="full"
            description={description}
            link={link}
        />
    );
};

const SploverPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`splover-preview-image  ${startAnimation ? "move" : ""}`}
            src={SploverImg}
        />
    );
};

export default Splover;
