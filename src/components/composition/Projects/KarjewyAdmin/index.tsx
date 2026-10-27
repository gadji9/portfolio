import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import KarjewyAdminImg from "@/assets/karjewy-admin.jpg";
import AdminImg from "@/assets/admin.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = ["React", "TypeScript", "Redux", "Tailwind + MUI", "Redux Toolkit"];

const KarjewyAdmin: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.karjewyAdmin;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={AdminImg}
            Preview={KarjewyAdminPreview}
            description={description}
            internal={strings.projects.internal}
        />
    );
};

const KarjewyAdminPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <SkeletonImage
            className={`karjewy-admin-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={KarjewyAdminImg}
            ratio="1280 / 870"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default KarjewyAdmin;
