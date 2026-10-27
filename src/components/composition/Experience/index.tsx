import { FunctionComponent } from "react";
import { useTranslation } from "@/i18n";

const Experience: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { title, total, jobs } = strings.about.experience;

    return (
        <section className="mt-16">
            <h2 className="font-extrabold text-transparent text-3xl lg:text-h2 bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 text-left pb-2">
                {title}
            </h2>
            <div className="text-zinc-400 text-sm mt-2">
                {total}
            </div>
            <div className="bg-[#272521] rounded-lg mt-8">
                {jobs.map((job, i) => (
                    <div
                        key={job.company}
                        className={
                            "flex flex-col lg:flex-row lg:gap-12 p-6 lg:p-10 " +
                            (i > 0 ? "border-t border-zinc-700/60" : "")
                        }
                    >
                        <div className="lg:w-[240px] shrink-0 lg:text-right">
                            <div className="text-zinc-400 text-sm">
                                {job.period}
                            </div>
                            <div className="text-white font-bold text-lg mt-1">
                                {job.company}
                            </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 w-fit">
                                {job.role}
                            </div>
                            <p className="text-[#adc6bd] text-body leading-6 mt-2 lg:leading-8">
                                {job.summary}
                            </p>
                            <ul className="mt-3">
                                {job.achievements.map((achievement) => (
                                    <li
                                        key={achievement}
                                        className="text-zinc-300 text-body leading-6 mt-2 flex gap-2"
                                    >
                                        <span className="text-amber-600 shrink-0">
                                            —
                                        </span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
