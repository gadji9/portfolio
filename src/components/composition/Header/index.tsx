import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import TGImg from "@/assets/telegram.png";
import LinkedInImg from "@/assets/linkedin.png";

const Header: FunctionComponent = () => {
    return (
        <div className="lg:px-36 ignore-padding w-full flex justify-between items-center">
            <div className="w-[30%] text-xl flex gap-10">
                <AppLink title="Work" href="/" inNewTab={false} />
                <AppLink title="About" href="/About" inNewTab={false} />
            </div>

            <div className="text-xl text-white flex lg:gap-8 gap-5 ">
                <AppLink
                    href="https://t.me/gadjife"
                    title={
                        <img className="invert" src={TGImg} alt="" width={30} />
                    }
                />
                <AppLink
                    title={
                        <img
                            className="invert"
                            src={LinkedInImg}
                            alt=""
                            width={30}
                        />
                    }
                    href="https://www.linkedin.com/in/gadjife/"
                />
            </div>
        </div>
    );
};
interface INavLinkProps {
    title?: React.ReactNode;
    inNewTab?: boolean;
    href: string;
}

export const AppLink: FunctionComponent<INavLinkProps> = ({
    title,
    inNewTab = true,
    href,
}) => {
    return (
        <>
            <Link
                to={href}
                className="text-xl text-white"
                {...(inNewTab ? { target: "_blank" } : {})}
            >
                {title}
            </Link>
        </>
    );
};

export default Header;
