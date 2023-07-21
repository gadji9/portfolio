import MainPage from "@/pages/main";
import AboutPage from "@pages/about";

const DefaultRoute = "/";

const Routes = [
    {
        path: "/",
        element: MainPage,
        access: ["*"],
    },
    {
        path: "/about",
        element: AboutPage,
        access: ["*"],
    },
];

export { DefaultRoute, Routes };
