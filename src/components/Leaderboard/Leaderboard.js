import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Leaderboard.css";

const Leaderboard = () => {
  let { map } = useParams();
  const mapAlt = map.split("-").join(" ").toUpperCase();
  return (
    <div id="Leaderboard">
      <div className="header-lb">
        <Link to={"/game/" + map}>&#x2190;</Link>
        <h1>TOP 10 Leaderboard</h1>
        <span style={{ visibility: "hidden" }}>&#x2190;</span>
      </div>
      <div className="leaderboard-content">
        <div className="leaderboard-header">{mapAlt}</div>
        <div className="leaderboard-times">
          <div>
            <span>1. Mouth</span> <span>92.322s</span>
          </div>
          <div>
            <span>2. Mouth</span> <span>92.322s</span>
          </div>
          <div>
            <span>3. Mouth</span> <span>2.322s</span>
          </div>
          <div>
            <span>4. Mouth</span> <span>192.322s</span>
          </div>
          <div>
            <span>5. Mouth</span> <span>92.322s</span>
          </div>
          <div>
            <span>1. Mouth</span> <span>92.322s</span>
          </div>
          <div>
            <span>2. Mouth</span> <span>92.322s</span>
          </div>
          <div>
            <span>3. Mouth</span> <span>2.322s</span>
          </div>
          <div>
            <span>4. Mouth</span> <span>192.322s</span>
          </div>
          <div>
            <span>10. Mouth</span> <span>92.322s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
