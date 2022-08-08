import React from "react";
import Characters from "./Characters";
import { useNavigate } from "react-router-dom";
import "./Map.css";

const Map = ({ map }) => {
  let navigate = useNavigate();
  return (
    <div className="Map">
      <img src={map.map} alt="" className="pic" />
      <div className="map-container">
        <div className="map-info">
          <h1>{map.name}</h1>
          <p>{map.author}</p>
        </div>
        <Characters characters={map.characters} />
        <button className="start" onClick={() => navigate(`game/${map.link}`)}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Map;
