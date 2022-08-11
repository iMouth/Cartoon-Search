import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import mapInfo from "./mapInfo";

//TODO: Add error handling for when user enters invalid map name
//TODO: 404 page for invalid link

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home mapInfo={mapInfo} />} />
        <Route path="/game/:map" element={<Game mapInfo={mapInfo} />} />
        <Route path="/leaderboard/:map" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;
