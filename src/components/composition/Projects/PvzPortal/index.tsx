import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import PvzPortalImg from "@/assets/pvz-portal.png";
import Task from "@/assets/task.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const PvzPortal: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.pvz;

    return (
        <Template
            name={name}
            effectsImg={Task}
            Preview={PvzPortalPreview}
            size="full"
            description={description}
        />
    );
};

const PvzPortalPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <SkeletonImage
            className={`pvz-portal-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={PvzPortalImg}
            ratio="1909 / 937"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default PvzPortal;
