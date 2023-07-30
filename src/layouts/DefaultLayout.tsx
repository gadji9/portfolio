import { FunctionComponent, lazy, Suspense } from "react";
import { Children } from "src/types";

const Footer = lazy(() => import("@/components/composition/Footer"));
const Header = lazy(() => import("@/components/composition/Header"));

const DefaultLayout: FunctionComponent<Children> = ({ children }) => {
    return (
        <div className="h-full w-full xl:px-xlPagePaddingX lg:px-lgPagePaddingX pt-pagePaddingTop px-mdPagePaddingX overflow-x-hidden">
            <Suspense fallback={""}>
                <Header />
                <div className="h-full w-full mt-10 mb-10">{children}</div>
                <Footer />
            </Suspense>
        </div>
    );
};

export default DefaultLayout;
