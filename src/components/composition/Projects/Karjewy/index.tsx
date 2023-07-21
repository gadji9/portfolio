import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import KarjewyImg from "@/assets/karjewy.jpg";
import DiamondRing from "@/assets/diamond-ring.png";

import "./index.css";

const technologies = "React, tailwind, SSR, redux, redux-thunk";
const name = "Karjewy";
const description = "Online jewelry shop";
const link = "https://karjewy.com/";

const Karjewy: FunctionComponent = () => {
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
