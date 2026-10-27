import { FunctionComponent } from "react";
import Cat from "../Cat";
import { AppLink } from "../Header";
import { useTranslation } from "@/i18n";
import { cvUrl } from "@/utils/publicUrl";
import "./index.css";

const Footer: FunctionComponent = () => {
    const { strings } = useTranslation();

    return (
        <footer className="flex left-0 bottom-0 items-center bg-[#272521] ignore-padding flex-col-reverse  lg:flex-row pt-20 text-xl">
            <Cat />
            <div className="flex gap-10">
                <ul className="leading-10">
                    <li className="text-amber-600 font-bold">
                        {strings.footer.elsewhere}
                    </li>
                    <li>
                        <AppLink
                            title="Github"
                            href="https://github.com/gadji9"
                        />
                    </li>
                    <li>
                        <AppLink
                            title="LinkedIn"
                            href="https://www.linkedin.com/in/gadjife/"
                        />
                    </li>
                    <li>
                        <a href={cvUrl} download className="text-xl text-white">
                            CV
                        </a>
                    </li>
                </ul>
                <ul className="leading-10">
                    <li className="text-amber-600 font-bold">
                        {strings.footer.contact}
                    </li>
                    <li className="text-white">
                        <AppLink
                            title="tg: @leslie_gilliams"
                            href="https://t.me/leslie_gilliams"
                        />
                    </li>
                    <li className="text-white">
                        <AppLink
                            title="gm_062@bk.ru"
                            href="mailto:gm_062@bk.ru"
                        />
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
