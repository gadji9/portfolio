import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import RinjaImg from "@/assets/rinja.jpg";
import GooglePlay from "@/assets/google-play.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = "C#, Unity";
const link =
    "https://play.google.com/store/apps/details?id=com.Pilchareinc.Rinja&hl=ru&gl=US";

const Rinja: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.rinja;

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
        <SkeletonImage
            className={`rinja-preview-image  ${startAnimation ? "move" : ""}`}
            src={RinjaImg}
            ratio="1280 / 576"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default Rinja;
