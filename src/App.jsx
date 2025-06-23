import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Backgrounds from "./pages/Backgrounds";
import ComponentsLibrary from "./pages/ComponentsLibrary";
import CommonBackground from "./comman/CommonBackground";

const App = () => (
  <div className="relative min-h-screen w-full">
    <CommonBackground />
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/backgrounds" element={<Backgrounds />} />
        <Route path="/components" element={<ComponentsLibrary />} />
      </Routes>
    </Router>
  </div>
);

export default App;
