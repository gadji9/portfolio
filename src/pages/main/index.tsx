import Projects from "@/components/composition/Projects";
import Eye from "@components/composition/Eye";
import { TypeAnimation } from "react-type-animation";

import { FunctionComponent, useEffect, useState } from "react";
import "./index.css";

const MainPage: FunctionComponent = () => {
    const [greetings, setGreetings] = useState(false);
    const [introduce, setIntroduce] = useState(false);
    const [description, setDescription] = useState(false);

    useEffect(() => {
        setGreetings(true);
        setTimeout(() => {
            setIntroduce(true);
        }, 1300);
        setTimeout(() => {
            setDescription(true);
        }, 4000);
    }, []);

    return (
        <>
            <div className="size-to-end flex lg:flex-row flex-col justify-between items-center ">
                <div className="2xl:max-w-[600px] lg:max-w-[350px] max-w-[600px] h-full flex flex-col justify-center ">
                    <div className="whitespace-nowrap">
                        {greetings && (
                            <h1 className="font-extrabold text-transparent 2xl:text-6xl lg:text-4xl text-h2 bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 w-fit pb-2">
                                <TypeAnimation
                                    sequence={[
                                        300,
                                        "Hi.",
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        "Hi.I am Gadjimurad",
                                    ]}
                                    wrapper="span"
                                    preRenderFirstString={false}
                                    speed={50}
                                    repeat={0}
                                />
                            </h1>
                        )}
                        {introduce ? (
                            <h2 className="font-extrabold text-transparent 2xl:text-6xl lg:text-4xl text-h2 bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 w-fit">
                                <TypeAnimation
                                    sequence={[1000, "A FrontEnd Developer"]}
                                    wrapper="span"
                                    preRenderFirstString={false}
                                    speed={50}
                                    repeat={0}
                                />
                            </h2>
                        ) : (
                            <div className="2xl:mt-[3.75rem] lg:mt-[2.45rem]"></div>
                        )}
                    </div>
                    <div className="text-lg text-white leading-6 mt-3 hidden lg:block">
                        <span
                            style={{
                                opacity: description ? 1 : 0,
                                transitionProperty: "all",
                                transitionDuration: "1.5s",
                            }}
                        >
                            I`m also a back-end developer and game developer.
                            But, I develop front-end skills, because I think
                            that this is my passion
                        </span>
                    </div>
                </div>
                <div className="lg:w-3/5 h-full flex justify-between eyebox">
                    <GradientBoxes />
                    <div className="2xl:w-full w-full h-full p-4 ">
                        <div className="w-full h-full rounded-2xl bg-zinc-900 flex justify-center items-center lg:pb-28 pb-14">
                            <Eye />
                        </div>
                    </div>
                    <GradientBoxes />
                </div>
            </div>
            <div className="mt-10">
                <Projects />
            </div>
        </>
    );
};

const GradientBoxes: FunctionComponent = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className="2xl:w-32 2xl:h-32 xl:w-24 xl:h-24 lg:w-20 lg:h-20 w-14 h-14 lg:rounded-3xl rounded-xl bg-gradient-to-t from-amber-500 to-rose-600"></div>
            <div className="2xl:w-32 2xl:h-32 xl:w-24 xl:h-24 lg:w-20 lg:h-20 w-14 h-14 lg:rounded-3xl rounded-xl bg-gradient-to-t from-amber-500 to-rose-600"></div>
        </div>
    );
};

export default MainPage;
