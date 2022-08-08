import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Game.css";

const Game = ({ mapInfo }) => {
  function imgClick(e) {
    console.log(e);
  }

  let { map } = useParams();
  let mapImg = null;
  if (map in mapInfo) mapImg = mapInfo[map].map;

  const chars = mapInfo[map].characters;
  const charList = [];
  Object.keys(chars).forEach((char) => {
    charList.push(<img key={char} src={chars[char].img} alt={chars[char].name} />);
  });

  return (
    <div id="Game">
      <div id="Header">
        <Link to="/">&#x2190;</Link>
        <p>00:00:00</p>
        <div className="characters">{charList}</div>
      </div>
      <img className={map} src={mapImg} alt="" onClick={(e) => imgClick(e)} />
    </div>
  );
};

export default Game;
