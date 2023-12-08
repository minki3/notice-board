import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Pagenation from "./pages/Pagenation/Pagenation";
import MenuTab from "./pages/MenuTab/MenuTab";
import InfinityScroll from "./pages/infinityScroll/InfinityScroll";
import Redux from "./pages/redux/Redux";
import EventExercise from "./pages/Event/EventExercise";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pagenation" element={<Pagenation />} />
        <Route path="/menutab" element={<MenuTab />} />
        <Route path="/infinityscroll" element={<InfinityScroll />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/event" element={<EventExercise />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
