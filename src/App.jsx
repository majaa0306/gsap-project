import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discovery from "./pages/Discovery";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discovery" element={<Discovery />} />
    </Routes>
  );
};

export default App;
