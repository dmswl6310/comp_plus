import "@fontsource/inter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Components from "./pages/Components";
import "./styles.css";
import Home from "./pages/Home";
import ComponentDetail from "./components/ComponentDetail";
import ReactDOM from "react-dom/client";
import React from "react";
import { ToastProvider } from "@/components/common/ToastProvider";
import { ThemeProvider } from "@/components/common/ThemeProvider";

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
    <ThemeProvider defaultTheme="system" storageKey="uikki-ui-theme">
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
