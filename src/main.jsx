import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";

import App from "./App";
import AboutPage from "./routes/AboutPage";
import PokemonLibrary from "./routes/PokemonLibrary";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800;900&display=swap');
</style>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "About",
    element: <AboutPage />,
  },
  {
    path: "The-Pokemon-Library",
    element: <PokemonLibrary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
