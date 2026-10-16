import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import SploverImg from "@/assets/splover.png";
import Dumbbell from "@/assets/dumbbell.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = "React, tailwind, mobx, equiring";
const link = "https://splover.ru/";

const Splover: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.splover;

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
        <SkeletonImage
            className={`splover-preview-image  ${startAnimation ? "move" : ""}`}
            src={SploverImg}
            ratio="1890 / 1217"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default Splover;
