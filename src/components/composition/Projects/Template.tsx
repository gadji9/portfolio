import { FunctionComponent, useState } from "react";

import "./Template.css";

interface ITemplateProps {
    technologies?: string[];
    name: string;
    description?: string;
    result?: string;
    /** shown instead of a link for products without public access */
    internal?: string;
    effectsImg: string;
    Preview: PreviewComponent;
    link?: string;
}

export type PreviewComponent = FunctionComponent<{ startAnimation: boolean }>;

const Template: FunctionComponent<ITemplateProps> = ({
    technologies,
    name,
    description,
    result,
    internal,
    effectsImg,
    Preview,
    link,
}) => {
    const [startAnimation, setStartAnimation] = useState(false);

    const isLink = Boolean(link?.length);

    const title = (
        <div className="project-title">
            <div className="project-title__technologies">
                {description}
            </div>
            <div className="project-title__name">{name}</div>
            {technologies?.length ? (
                <div className="project-title__stack">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="project-title__chip"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            ) : null}
            {result ? (
                <div className="project-title__result">{result}</div>
            ) : null}
            {internal ? (
                <div className="project-title__internal">{internal}</div>
            ) : null}
        </div>
    );

    const preview = (
        <div className="project-preview">
            <Preview startAnimation={startAnimation} />
        </div>
    );

    const appearIcons = (
        <div className="project-appear-icons hidden lg:block">
            <img src={effectsImg} alt="" />
        </div>
    );

    const hoverProps = {
        onMouseEnter: () => setStartAnimation(true),
        onMouseLeave: () => setStartAnimation(false),
    };

    if (isLink) {
        return (
            <a
                className="project-box"
                href={link}
                target="_blank"
                rel="noreferrer"
                {...hoverProps}
            >
                {appearIcons}
                {title}
                {preview}
            </a>
        );
    }

    return (
        <div className="project-box project-box_static" {...hoverProps}>
            {appearIcons}
            {title}
            {preview}
        </div>
    );
};

export default Template;
