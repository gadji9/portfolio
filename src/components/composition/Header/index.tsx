import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import TGImg from "@/assets/telegram.png";
import LinkedInImg from "@/assets/linkedin.png";
import { useTranslation } from "@/i18n";

const Header: FunctionComponent = () => {
    const { lang, toggleLang, strings } = useTranslation();

    return (
        <nav className="ignore-padding xl:px-xlPagePaddingX lg:px-lgPagePaddingX  w-full flex justify-between items-center">
            <div className="w-[30%] text-xl flex gap-10">
                <AppLink
                    title={strings.header.work}
                    href="/"
                    inNewTab={false}
                />
                <AppLink
                    title={strings.header.about}
                    href="/About"
                    inNewTab={false}
                />
            </div>

            <div className="text-xl text-white flex items-center lg:gap-8 gap-5 ">
                <button
                    type="button"
                    onClick={toggleLang}
                    aria-label={
                        lang === "ru"
                            ? "Switch language to English"
                            : "Переключить язык на русский"
                    }
                    title={
                        lang === "ru"
                            ? "Switch language to English"
                            : "Переключить язык на русский"
                    }
                    className="text-lg text-white leading-none h-[30px] px-2 flex items-center rounded-md border border-zinc-500 hover:border-white transition-colors select-none cursor-pointer"
                >
                    {lang.toUpperCase()}
                </button>
                <AppLink
                    href="https://t.me/leslie_gilliams"
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
        </nav>
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
