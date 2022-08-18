import React from "react";
import Code from "../mainFile/Code";
import NavBar from "../components/navBar/NavBar";
import Dining from "../components/Pages/dining/Dining";
import Kitchen from "../components/Pages/kitchen/Kitchen";
import Chair from "../components/Pages/chair/Chair";
import Bedroom from "../components/Pages/bedroom/Bedroom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Code />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/bedroom" element={<Bedroom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Routing;
