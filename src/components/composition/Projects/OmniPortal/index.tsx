import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import OmniPortalImg from "@/assets/omni-portal.png";
import AdminImg from "@/assets/admin.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const OmniPortal: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.omni;

    return (
        <Template
            name={name}
            effectsImg={AdminImg}
            Preview={OmniPortalPreview}
            size="full"
            description={description}
        />
    );
};

const OmniPortalPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <SkeletonImage
            className={`omni-portal-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={OmniPortalImg}
            ratio="1916 / 985"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default OmniPortal;
