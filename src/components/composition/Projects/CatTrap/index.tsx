import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../template";
import CatTrapImage from "@/assets/cattrap.png";
import CatImage from "@/assets/cat.png";

import "./index.css";

const technologies = "React, OOP";
const name = "Cattrap";
const description = "Catch a cat";
const link = "https://gadji9.github.io/react_cat_trap_class_implementation/";

const CatTrap: FunctionComponent = () => {
    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={CatImage}
            Preview={CatTrapPreview}
            size="shrink"
            description={description}
            link={link}
        />
    );
};

const CatTrapPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`cattrap-preview-image  ${startAnimation ? "move" : ""}`}
            src={CatTrapImage}
        />
    );
};

export default CatTrap;
