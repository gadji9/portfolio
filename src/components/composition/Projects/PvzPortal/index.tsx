import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import PvzPortalImg from "@/assets/pvz-portal.png";
import Task from "@/assets/task.png";

import "./index.css";

const name = "Pvz portal";
const description = "Application for receiving and issuing orders";

const PvzPortal: FunctionComponent = () => {
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
        <img
            className={`pvz-portal-preview-image  ${startAnimation ? "move" : ""}`}
            src={PvzPortalImg}
        />
    );
};

export default PvzPortal;
