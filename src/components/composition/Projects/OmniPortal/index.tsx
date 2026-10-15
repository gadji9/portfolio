import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import OmniPortalImg from "@/assets/omni-portal.png";
import AdminImg from "@/assets/admin.png";

import "./index.css";

const name = "Omni portal";
const description = "Admin panel for FivePost network employees";

const OmniPortal: FunctionComponent = () => {
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
        <img
            className={`omni-portal-preview-image  ${startAnimation ? "move" : ""}`}
            src={OmniPortalImg}
        />
    );
};

export default OmniPortal;
