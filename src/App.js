import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import mapInfo from "./mapInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home mapInfo={mapInfo} />} />
        <Route path="/game/:map" element={<Game mapInfo={mapInfo} />} />
      </Routes>
    </Router>
  );
};

export default App;
