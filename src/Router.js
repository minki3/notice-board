import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pagenation from "./pages/Pagenation/Pagenation";
import MenuTab from "./pages/MenuTab/MenuTab";
import InfinityScroll from "./pages/infinityScroll/InfinityScroll";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pagenation" element={<Pagenation />} />
        <Route path="/menutab" element={<MenuTab />} />
        <Route path="/infinityscroll" element={<InfinityScroll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
