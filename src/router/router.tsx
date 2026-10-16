import DefaultLayout from "@layouts/DefaultLayout";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Routes as Views } from "./routes";

// GitHub Pages serves the site under /portfolio, Vercel serves it from the root
const basename = window.location.pathname.startsWith("/portfolio")
    ? "/portfolio"
    : "/";

function Router() {
    useEffect(() => {
        document.title = "Gadjimurad Sultanmagomedov";
    }, []);

    return (
        <>
            <BrowserRouter basename={basename}>
                <DefaultLayout>
                    <Routes>
                        {Views.map((view) => (
                            <Route
                                key={view.path}
                                path={view.path}
                                element={
                                    <Suspense fallback={<div>...</div>}>
                                        <view.element />
                                    </Suspense>
                                }
                            />
                        ))}
                    </Routes>
                </DefaultLayout>
            </BrowserRouter>
        </>
    );
}

export default Router;
