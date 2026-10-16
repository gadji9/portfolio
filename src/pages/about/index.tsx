import { Fragment, FunctionComponent } from "react";
import SkeletonImage from "@/components/composition/SkeletonImage";
import Avatar from "@/assets/avatar.jpg";
import { useTranslation } from "@/i18n";
import "./index.css";

interface AaboutPropsPage {
    className?: string;
}

const AboutPage: FunctionComponent<AaboutPropsPage> = () => {
    const { strings } = useTranslation();
    const { about } = strings;

    return (
        <div className={"w-full mt-20"}>
            <h1 className="font-extrabold text-transparent 2xl:text-7xl xl:text-6xl text-5xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600  text-center text-h2 pb-3">
                {about.title}
            </h1>
            <div className="w-full flex flex-col lg:flex-row justify-around items-center lg:mt-20 my-5">
                <div>
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
                <div className="lg:w-1/2">
                    <h2 className="font-extrabold text-transparent lg:text-h2 lg:leading-[70px] text-2xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 text-center lg:text-left mt-5 lg:mt-0 pb-4">
                        {about.subtitle}
                    </h2>
                </div>
            </div>
            <div className="xl:p-40 lg:p-24 mt-10 lg:mt-0 ignore-padding px-2">
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
            <div className="w-full flex justify-center ignore-padding xl:px-40 lg:px-24">
                <div className=" w-full flex flex-col lg:flex-row justify-between mt-10 lg:mt-0 gap-10">
                    <div className="bg-[#272521] rounded-lg p-10">
                        <div className="text-amber-600 text-xl mb-4">
                            {about.hard}
                        </div>
                        <ul className="text-white leading-7 list-decimal">
                            {about.hardSkills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#272521] rounded-lg p-10 ">
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
        </div>
    );
};

export default AboutPage;
