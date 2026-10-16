import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import DocsImg from "@/assets/Docs.png";
import Documents from "@/assets/Documents.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = "React 18, Graphql/Apollo, Mobx, Vitest, Webpack";
const link = "https://doc.astral.ru/";

const Docs: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.docs;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={Documents}
            Preview={DocsPreview}
            size="shrink"
            description={description}
            link={link}
        />
    );
};

const DocsPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`docs-preview-image  ${startAnimation ? "move" : ""}`}
            src={DocsImg}
        />
    );
};

export default Docs;
