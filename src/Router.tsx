// src/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/components" element={<ComponentList />} />
        <Route path="/components/:id" element={<ComponentDetail />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
