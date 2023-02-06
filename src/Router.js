import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPages from "./pages/mainpage/mainpages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
