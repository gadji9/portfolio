import { FunctionComponent } from "react";
import Template, { PreviewComponent } from "../Template";
import SkeletonImage from "@/components/composition/SkeletonImage";
import SocialMedia from "@/assets/social-media.png";
import SocialMediaActions from "@/assets/social-media-actions.png";
import { useTranslation } from "@/i18n";

import "./index.css";

const technologies = ["React", "React Query", "RTK", "Jest", "RTL", "Webpack"];

const HackerSM: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { name, description } = strings.projects.hackerSM;

    return (
        <Template
            technologies={technologies}
            name={name}
            effectsImg={SocialMediaActions}
            Preview={HackerSMPreview}
            description={description}
        />
    );
};

const HackerSMPreview: PreviewComponent = ({ startAnimation }) => {
    return (
        <SkeletonImage
            className={`hackersm-preview-image  ${
                startAnimation ? "move" : ""
            }`}
            src={SocialMedia}
            ratio="1242 / 562"
            skeletonClassName="rounded-[2vw]"
        />
    );
};

export default HackerSM;
