import { FunctionComponent } from "react";
import Avatar from "@/assets/brown-avatar.png";
import "./index.css";

interface AaboutPropsPage {
    className?: string;
}

const AboutPage: FunctionComponent<AaboutPropsPage> = () => {
    return (
        <div className={"w-full mt-20"}>
            <h1 className="font-extrabold text-transparent 2xl:text-7xl xl:text-6xl text-5xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600  text-center text-h2 pb-3">
                I`am Gadjimurad.
            </h1>
            <div className="w-full flex flex-col lg:flex-row justify-around items-center lg:mt-20 my-5">
                <div>
                    <img
                        className="rounded-t-[10rem] rounded-b-2xl"
                        src={Avatar}
                        alt=""
                        width={400}
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="font-extrabold text-transparent lg:text-h2 lg:leading-[70px] text-2xl bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 text-center lg:text-left mt-5 lg:mt-0 pb-4">
                        I'm a Frontend Developer working remotely from Dagestan.
                    </h2>
                </div>
            </div>
            <div className="xl:p-40 lg:p-24 mt-10 lg:mt-0 ignore-padding px-2">
                <span className="text-[#adc6bd] text-body lg:leading-8 leading-6">
                    I live in the Republic of Dagestan.
                    <br />
                    Started programming at the age of 14. I loved to play games,
                    so i decided to become a game developer. Started with c#.
                    <br />
                    From video tutorials on the Internet, I learned enough
                    knowledge to create games on Unity. I was passionate about
                    this business and created games one by one. I posted one of
                    them on google play.
                    <br />
                    <br />
                    In search of an opportunity to monetize my activities, I
                    found a vacancy in a nearby city in Vue JS.
                    <br />
                    Therefore, I diligently began to study html css js.
                    Unfortunately, this job was not successful.
                    <br />
                    Within six months of studying, I was hired by spichka dev as
                    a backend developer. I got my second wind.
                    <br />
                    I really liked learning and communicating with my
                    colleagues, so in another half a year I became a full stack.
                    Since the tasks on the backend are over, I asked them to
                    give me tasks on the front. So I started my dive into React
                    JS. Since then, namely 2 years, I have been studying it and
                    trying to get better and better.
                    <br />
                    <br />
                    English level - "B2" Also studied on my own.
                    <br />
                    <br />I actively follow the latest trends and changes in IT,
                    because for me this area is very interesting, and I am ready
                    to devote my life to it. Therefore, I am looking for a
                    strong team in which I could develop, learn new things, be
                    useful.
                    <br />
                    <br />
                    If you need a motivated employee who is ready to develop and
                    become better every day, then feel free to get in touch with
                    me, I will be happy to answer ;)
                </span>
            </div>
            <div className="w-full flex justify-center ignore-padding xl:px-40 lg:px-24">
                <div className=" w-full flex flex-col lg:flex-row justify-between mt-10 lg:mt-0 gap-10">
                    <div className="bg-[#272521] rounded-lg p-10">
                        <div className="text-amber-600 text-xl mb-4">Hard</div>
                        <ul className="text-white leading-7 list-decimal">
                            <li>React, Next js</li>
                            <li>Redux, redux-toolkit ,Mobx</li>
                            <li>React query, Graphql, Apollo, RestApi</li>
                            <li>Jest, React-testing-library</li>
                            <li>HTML5, Css3, Scss, JavaScript, TypeScript</li>
                            <li>Node js, Express js, feathers js, Nest js</li>
                            <li>Sequelize, Docker</li>
                            <li>Webpack, Babel, Git</li>
                            <li>English - B2</li>
                        </ul>
                    </div>
                    <div className="bg-[#272521] rounded-lg p-10 ">
                        <div className="text-amber-600 text-xl mb-4">Soft</div>
                        <ul className="text-white leading-7 list-decimal">
                            <li>Creativity.Innovative, imaginative.</li>
                            <li>Teamwork. Collaborative, cooperative</li>
                            <li>Adaptability. Flexible, responsive.</li>
                            <li>Problem-solving. Analytical logical.</li>
                            <li>Growth Mindsetю Open-minded, optimistic.</li>
                            <li>
                                Self-Study.Proactive, motivated, continuous.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
