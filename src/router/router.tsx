import DefaultLayout from "@layouts/DefaultLayout";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Routes as Views } from "./routes";

function Router() {
  return (
    <>
      <BrowserRouter>
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
