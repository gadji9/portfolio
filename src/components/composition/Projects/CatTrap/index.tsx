import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import CatTrapImage from "@/assets/cattrap.png";
import CatImage from "@/assets/cat.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = "React, OOP";
const link = "https://gadji9.github.io/react_cat_trap_class_implementation/";

const CatTrap: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.catTrap;

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
