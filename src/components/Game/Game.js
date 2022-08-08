import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Game.css";

const Game = ({ mapInfo }) => {
  let { map } = useParams();
  let mapImg = null;
  if (map in mapInfo) mapImg = mapInfo[map].map;
  return (
    <div id="Game">
      <div id="Header">
        <Link to="/">&#x2190;</Link>
        <p>00:00:00</p>
        <div className="characters">
          <img src={mapInfo[map].characters[0]} alt="" />
          <img src={mapInfo[map].characters[1]} alt="" />
          <img src={mapInfo[map].characters[2]} alt="" />
        </div>
      </div>
      <img className={map} src={mapImg} alt="" />
    </div>
  );
};

export default Game;
