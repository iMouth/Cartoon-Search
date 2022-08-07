import React from "react";
import { useParams } from "react-router-dom";

const Game = () => {
  let { map } = useParams();
  return <div>Game</div>;
};

export default Game;
