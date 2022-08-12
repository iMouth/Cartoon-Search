import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import mapInfo from "./mapInfo";

const App = ({ db }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home mapInfo={mapInfo} />} />
        <Route path="/game/:map" element={<Game mapInfo={mapInfo} db={db} />} />
        <Route path="/leaderboard/:map" element={<Leaderboard mapInfo={mapInfo} db={db} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
