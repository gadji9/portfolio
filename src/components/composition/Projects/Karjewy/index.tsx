import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import KarjewyImg from "@/assets/karjewy.jpg";
import DiamondRing from "@/assets/diamond-ring.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = ["React", "TypeScript", "Redux", "Tailwind + MUI", "Redux Toolkit"];
const link = "https://karjewy.com/";

const Karjewy: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description, result } = strings.projects.karjewy;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={DiamondRing}
            Preview={KarjewyPreview}
            description={description}
            result={result}
            link={link}
        />
    );
};

const KarjewyPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <SkeletonImage
            className={`karjewy-preview-image  ${startAnimation ? "move" : ""}`}
            src={KarjewyImg}
            ratio="1357 / 930"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default Karjewy;
