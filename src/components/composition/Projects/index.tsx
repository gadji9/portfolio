import { FunctionComponent } from "react";
import CatTrap from "./CatTrap";
import HackerSM from "./HackerSM";
import Trello from "./Trello";
import Rinja from "./Rinja";
import Karjewy from "./Karjewy";
import KarjewyAdmin from "./KarjewyAdmin";
import Splover from "./Splover";
import SploverAdmin from "./SploverAdmin";

const Projects: FunctionComponent = () => {
    return (
        <div className="w-full">
            <div>
                <h3 className="w-full text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-rose-600 w-fit pb-2 2xl:text-7xl text-4xl lg:my-10">
                    Pet
                </h3>
                <div className="text-body text-white lg:mb-24 mb-10 w-full text-center leading-8">
                    These are interesting projects that come to my mind, or for
                    practicing new technologies.
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between 2xl:gap-40 lg:gap-20 gap-10 mt-5 lg:mt-10">
                    <CatTrap />
                    <Trello />
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between 2xl:gap-40 gap-20 mt-10 lg:mt-20">
                    <Rinja />
                    <HackerSM />
                </div>
            </div>

            <div className="py-10 mt-5 lg:mt-20 rounded-xl">
                <h3 className="w-full text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-rose-600 w-fit pb-2 2xl:text-7xl text-4xl  lg:mb-10">
                    Commercial
                </h3>
                <div className="text-body text-white lg:mb-24 mb-10 w-full text-center leading-8">
                    These are interesting projects that I`ve made on order
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
        </div>
    );
};

export default Projects;
