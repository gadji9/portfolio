import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../template";
import KarjewyAdminImg from "@/assets/karjewy-admin.jpg";
import AdminImg from "@/assets/admin.png";

import "./index.css";

const technologies = "Vue, vuex";
const name = "Karjewy admin";
const description = "Admin panel for karjewy";


const KarjewyAdmin: FunctionComponent = () => {
    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={AdminImg}
            Preview={KarjewyAdminPreview}
            size="half"
            description={description}
        />
    );
};

const KarjewyAdminPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`karjewy-admin-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={KarjewyAdminImg}
        />
    );
};

export default KarjewyAdmin;
