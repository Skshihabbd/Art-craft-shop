import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./main component/router/Router.jsx";
import AuthProvider from "./main component/Auth provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { LoadingProvider } from "./main component/Auth provider/LoadingProvider.jsx";
// import AuthProvider from "./main component/Auth provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <LoadingProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </LoadingProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
setTimeout(() => {
  const loader = document.getElementById("preloader");
  if (loader) loader.style.display = "none";
}, 500);