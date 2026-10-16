import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import KarjewyImg from "@/assets/karjewy.jpg";
import DiamondRing from "@/assets/diamond-ring.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = "React, tailwind, SSR, redux, redux-thunk";
const link = "https://karjewy.com/";

const Karjewy: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.karjewy;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={DiamondRing}
            Preview={KarjewyPreview}
            size="half"
            description={description}
            link={link}
        />
    );
};

const KarjewyPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`karjewy-preview-image  ${startAnimation ? "move" : ""}`}
            src={KarjewyImg}
        />
    );
};

export default Karjewy;
