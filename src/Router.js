import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pagenation from "./pages/Pagenation/Pagenation";
import MenuTab from "./pages/MenuTab/MenuTab";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pagenation" element={<Pagenation />} />
        <Route path="/menutab" element={<MenuTab />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
