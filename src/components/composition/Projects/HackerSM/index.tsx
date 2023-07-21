import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SocialMedia from "@/assets/social-media.png";
import SocialMediaActions from "@/assets/social-media-actions.png";

import "./index.css";

const technologies = "React, React Query, Jest ,RTL, Redux-toolkit, webpack";
const name = "Social Media";
const description = "(Comming Soon)";

const HackerSM: FunctionComponent = () => {
    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={SocialMediaActions}
            Preview={HackerSMPreview}
            size="half"
            description={description}
        />
    );
};

const HackerSMPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <img
            className={`hackersm-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={SocialMedia}
        />
    );
};

export default HackerSM;
