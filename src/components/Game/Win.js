import React from "react";
import "./Win.css";

const Win = ({ time, reset }) => {
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
            <button type="button">Record Score</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win;
