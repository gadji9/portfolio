import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import SploverAdminImg from "@/assets/splover-admin.jpg";
import AdminImg from "@/assets/admin.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = ["React", "TypeScript", "Redux", "Tailwind + MUI", "Redux Toolkit"];

const SploverAdmin: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.sploverAdmin;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={AdminImg}
            Preview={SploverAdminPreview}
            description={description}
            internal={strings.projects.internal}
        />
    );
};

const SploverAdminPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <SkeletonImage
            className={`splover-admin-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={SploverAdminImg}
            ratio="1906 / 937"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default SploverAdmin;
