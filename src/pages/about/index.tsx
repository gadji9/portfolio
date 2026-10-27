import { Fragment, FunctionComponent } from "react";
import SkeletonImage from "@/components/composition/SkeletonImage";
import Experience from "@/components/composition/Experience";
import Avatar from "@/assets/avatar.jpg";
import { useTranslation } from "@/i18n";
import "./index.css";

const AboutPage: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { about } = strings;

    return (
        <div className="w-full mt-10">
            <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,640px)_auto] justify-between items-center lg:items-start gap-10">
                <div className="max-w-[640px]">
                    <h1 className="font-extrabold text-transparent 2xl:text-7xl xl:text-6xl text-5xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 text-center lg:text-left pb-3">
                        {about.title}
                    </h1>
                    <h2 className="font-extrabold text-transparent lg:text-h2 text-4xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 text-center lg:text-left mt-4 pb-4">
                        {about.subtitle}
                    </h2>
                </div>
                <div className="shrink-0 lg:row-span-2">
                    <span className="text-white text-body -rotate-45 inline-block -translate-x-8 translate-y-8">
                        {about.itsMe}
                    </span>
                    <SkeletonImage
                        className="rounded-t-[10rem] rounded-b-2xl transition-opacity duration-700"
                        skeletonClassName="rounded-t-[10rem] rounded-b-2xl"
                        src={Avatar}
                        alt="avatar"
                        ratio="720 / 853"
                        width={400}
                    />
                </div>
                <div className="max-w-[640px]">
                    <div className="text-zinc-400 text-sm mb-3">
                        {about.stackTitle}
                    </div>
                    <ul className="flex flex-wrap gap-2">
                        {about.stack.map((tech) => (
                            <li
                                key={tech}
                                className="text-sm leading-[0.5rem] lg:leading-5 text-zinc-300 border border-zinc-600/60 rounded-md px-2.5 py-1 bg-black/20"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Experience />
            <div className="mt-14">
                <span className="text-[#adc6bd] text-body lg:leading-8 leading-6">
                    {about.bio.map((paragraph, i) => (
                        <Fragment key={i}>
                            {paragraph}
                            {i < about.bio.length - 1 && (
                                <>
                                    <br />
                                    <br />
                                </>
                            )}
                        </Fragment>
                    ))}
                </span>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-10 mt-16">
                <div className="bg-[#272521] rounded-lg p-10 flex-1">
                    <div className="text-amber-600 text-xl mb-4">
                        {about.hard}
                    </div>
                    <ul className="text-white leading-7 list-decimal">
                        {about.hardSkills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#272521] rounded-lg p-10 flex-1">
                    <div className="text-amber-600 text-xl mb-4">
                        {about.soft}
                    </div>
                    <ul className="text-white leading-7 list-decimal">
                        {about.softSkills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
