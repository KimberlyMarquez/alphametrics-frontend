import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/new_element_styles.css";
import "./styles/elements_styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
