import { FunctionComponent, useState } from "react";
import Tooltip from "../ToolTip";

import "./Template.css";

interface ITemplateProps {
    technologies: string;
    name: string;
    description?: string;
    effectsImg: string;
    Preview: PreviewComponent;
    link?: string;
    size: "full" | "half" | "grow" | "shrink";
}

export type PreviewComponent = FunctionComponent<{ startAnimation: boolean }>;

const Template: FunctionComponent<ITemplateProps> = ({
    technologies,
    name,
    description,
    effectsImg,
    Preview,
    link,
}) => {
    const [startAnimation, setStartAnimation] = useState(false);

    const handleClick = () => {
        if (link?.length) {
            window.open(link, "_blank");
        }
    };

    return (
        <div
            className={"project-box "}
            onClick={handleClick}
            onMouseEnter={() => setStartAnimation(true)}
            onMouseLeave={() => setStartAnimation(false)}
        >
            <div className="project-appear-icons hidden lg:block">
                <img src={effectsImg} alt="asd" />
            </div>
            <Tooltip title={technologies} position="top">
                <div className="project-title">
                    <div className="project-title__technologies">
                        {description}
                    </div>
                    <div className="project-title__name">{name}</div>
                </div>
            </Tooltip>
            <div className="project-preview">
                {<Preview startAnimation={startAnimation} />}
            </div>
        </div>
    );
};

export default Template;
