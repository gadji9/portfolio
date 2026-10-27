import { FunctionComponent } from "react";
import { useTranslation } from "@/i18n";
import CatTrap from "./CatTrap";
import HackerSM from "./HackerSM";
import Trello from "./Trello";
import Rinja from "./Rinja";
import Karjewy from "./Karjewy";
import KarjewyAdmin from "./KarjewyAdmin";
import Splover from "./Splover";
import SploverAdmin from "./SploverAdmin";
import Docs from "./Docs";
import PvzPortal from "./PvzPortal";
import OmniPortal from "./OmniPortal";

const Projects: FunctionComponent = () => {
    const { strings } = useTranslation();
    const { projects } = strings;

    return (
        <div className="w-full">
            <div className="py-10 mt-5 lg:mt-20 rounded-xl">
                <h3 className="w-full text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-rose-600 w-fit pb-2 2xl:text-7xl text-4xl  lg:mb-10">
                    {projects.commercial}
                </h3>
                <div className="text-body text-white lg:mb-24 mb-10 w-full text-center leading-8">
                    {projects.commercialSubtitle}
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between 2xl:gap-40 lg:gap-20 gap-10">
                    <PvzPortal />
                    <OmniPortal />
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between lg:margin-0 mb-10 2xl:gap-40 lg:gap-20 mt-10 lg:mt-20 ">
                    <div className="lg:w-1/2 w-full">
                        <Docs />
                    </div>
                    <p className="w-1/2 lg:flex text-white 2xl:text-4xl text-2xl  hidden items-center">
                        {projects.docsParagraph}
                    </p>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between  2xl:gap-40 gap-10 lg:gap-20 lg:mt-20 ">
                    <Splover />
                    <SploverAdmin />
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between  2xl:gap-40 gap-10 lg:gap-20 mt-10 lg:mt-10 ">
                    <Karjewy />
                    <KarjewyAdmin />
                </div>
            </div>

            <div>
                <h3 className="w-full text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-rose-600 w-fit pb-2 2xl:text-7xl text-4xl lg:my-10">
                    {projects.pet}
                </h3>
                <div className="text-body text-white lg:mb-24 mb-10 w-full text-center leading-8">
                    {projects.petSubtitle}
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between 2xl:gap-40 lg:gap-20 gap-10 mt-5 lg:mt-10">
                    <Rinja />
                    <Trello />
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between 2xl:gap-40 gap-20 mt-10 lg:mt-20">
                    <CatTrap />
                    <HackerSM />
                </div>
            </div>
        </div>
    );
};

export default Projects;
