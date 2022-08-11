import React from "react";
import { useNavigate } from "react-router-dom";
import "./Win.css";

const Win = ({ time, reset, map }) => {
  let navigate = useNavigate();
  return (
    <div className="win-modal">
      <div className="win-modal-box">
        <div className="win-content">
          <h1>You Win!</h1>
          <p>You finished in {time}s</p>
          <input id="username" type="text" autoComplete="off" placeholder="Enter Username"></input>
          <div className="winBtns">
            <button type="button" onClick={reset}>
              Play Again
            </button>
            <button
              type="button"
              onClick={() => {
                //TODO: Save score to database
                navigate("/leaderboard/" + map);
              }}
            >
              Record Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win;
