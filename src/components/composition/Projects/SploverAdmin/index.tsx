import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SploverAdminImg from "@/assets/splover-admin.jpg";
import AdminImg from "@/assets/admin.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = "Vue, vuex, equiring";

const SploverAdmin: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.sploverAdmin;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={AdminImg}
            Preview={SploverAdminPreview}
            size="half"
            description={description}
        />
    );
};

const SploverAdminPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`splover-admin-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={SploverAdminImg}
        />
    );
};

export default SploverAdmin;
