import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../template";
import RinjaImg from "@/assets/rinja.jpg";
import GooglePlay from "@/assets/google-play.png";

import "./index.css";

const technologies = "C#, Unity";
const name = "Rinja game";
const description = "Arcade 2d runner";
const link =
    "https://play.google.com/store/apps/details?id=com.Pilchareinc.Rinja&hl=ru&gl=US";

const Rinja: FunctionComponent = () => {
    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={GooglePlay}
            Preview={RinjaPreview}
            size="half"
            link={link}
            description={description}
        />
    );
};

const RinjaPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`rinja-preview-image  ${startAnimation ? "move" : ""}`}
            src={RinjaImg}
        />
    );
};

export default Rinja;
