import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import DocsImg from "@/assets/Docs.png";
import Documents from "@/assets/Documents.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = ["React", "TypeScript", "styled-components + MUI", "MobX", "GraphQL + Apollo"];
const link = "https://doc.astral.ru/";

const Docs: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description, result } = strings.projects.docs;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={Documents}
            Preview={DocsPreview}
            description={description}
            result={result}
            link={link}
        />
    );
};

const DocsPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <SkeletonImage
            className={`docs-preview-image  ${startAnimation ? "move" : ""}`}
            src={DocsImg}
            ratio="1889 / 919"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default Docs;
