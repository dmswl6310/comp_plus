import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Components from "./pages/Components";
import "./styles.css";
import Home from "./pages/Home";
import ComponentDetail from "./components/ComponentDetail";
import ReactDOM from "react-dom/client";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "components", element: <Components /> },
      { path: "components/:id", element: <ComponentDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
