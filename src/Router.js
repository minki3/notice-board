import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pagenation from "./pages/Pagenation/Pagenation";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pagenation" element={<Pagenation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
