import Projects from "@/components/composition/Projects";
import Eye from "@components/composition/Eye";
import { useTranslation } from "@/i18n";
import { cvUrl } from "@/utils/publicUrl";

import { Fragment, FunctionComponent, useEffect, useState } from "react";
import "./index.css";

const TG_LINK = "https://t.me/leslie_gilliams";

// react-type-animation writes into React-owned DOM imperatively and silently
// dies in some production chunk layouts, so typing is React-state-driven here.
// A step is either a pause in ms or a target string typed char by char.
const useTypewriter = (steps: (number | string)[], resetKey: string) => {
    const [text, setText] = useState("");

    useEffect(() => {
        let cancelled = false;
        const sleep = (ms: number) =>
            new Promise<void>((resolve) => {
                if (cancelled) return resolve();
                setTimeout(resolve, ms);
            });
        const run = async () => {
            let current = "";
            for (const step of steps) {
                if (cancelled) return;
                if (typeof step === "number") {
                    await sleep(step);
                } else {
                    while (current !== step) {
                        const next = step.startsWith(current)
                            ? step.slice(0, current.length + 1)
                            : current.slice(0, -1);
                        await sleep(50);
                        if (cancelled) return;
                        current = next;
                        setText(current);
                    }
                }
            }
        };
        setText("");
        run();
        return () => {
            cancelled = true;
        };
    }, [resetKey]); // eslint-disable-line react-hooks/exhaustive-deps

    return text;
};

const Typewriter: FunctionComponent<{
    steps: (number | string)[];
    resetKey: string;
    className?: string;
}> = ({ steps, resetKey, className }) => {
    const text = useTypewriter(steps, resetKey);
    return <span className={className}>{text}</span>;
};

const MainPage: FunctionComponent = () => {
    const { lang, strings } = useTranslation();
    const { facts, cta } = strings.main;
    const [introduce, setIntroduce] = useState(false);
    const [description, setDescription] = useState(false);

    useEffect(() => {
        const introduceTimer = setTimeout(() => setIntroduce(true), 1300);
        const descriptionTimer = setTimeout(() => setDescription(true), 4000);
        return () => {
            clearTimeout(introduceTimer);
            clearTimeout(descriptionTimer);
        };
    }, []);

    return (
        <>
            <div className="size-to-end flex lg:flex-row flex-col justify-between items-center ignore-padding lg xl">
                <div className="2xl:max-w-[600px] lg:max-w-[350px] max-w-[600px] h-full flex flex-col justify-center px-5 lg:px-0">
                    <div className="lg:whitespace-nowrap">
                        <h1 className="relative font-extrabold text-transparent 2xl:text-4xl text-3xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 w-fit pb-2">
                            <span className="invisible" aria-hidden="true">
                                {strings.main.hiName}
                            </span>
                            <Typewriter
                                steps={[
                                    300,
                                    strings.main.hi,
                                    1000,
                                    strings.main.hiName,
                                ]}
                                resetKey={`greeting-${lang}`}
                                className="absolute left-0 top-0 w-full bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600"
                            />
                        </h1>
                        <h2 className="relative font-extrabold text-transparent 2xl:text-4xl text-3xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 w-fit">
                            <span className="invisible" aria-hidden="true">
                                {strings.main.role}
                            </span>
                            {introduce && (
                                <Typewriter
                                    steps={[1000, strings.main.role]}
                                    resetKey={`role-${lang}`}
                                    className="absolute left-0 top-0 w-full bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600"
                                />
                            )}
                        </h2>
                    </div>
                    <div className="text-lg text-white leading-6 mt-3">
                        <span
                            style={{
                                opacity: description ? 1 : 0,
                                transitionProperty: "all",
                                transitionDuration: "1.5s",
                            }}
                        >
                            {strings.main.description}
                        </span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-400">
                        {facts.map((fact, i) => (
                            <Fragment key={fact}>
                                {i > 0 && (
                                    <span className="text-amber-500">·</span>
                                )}
                                <span>{fact}</span>
                            </Fragment>
                        ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href={cvUrl}
                            download
                            className="rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 px-6 py-3 font-bold text-zinc-950 transition hover:brightness-110"
                        >
                            {cta.cv}
                        </a>
                        <a
                            href={TG_LINK}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-zinc-500 px-6 py-3 text-white transition-colors hover:border-white"
                        >
                            {cta.telegram}
                        </a>
                    </div>
                </div>
                <div className="lg:w-[57%] h-full flex justify-between w-full">
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
