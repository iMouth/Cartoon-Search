import React from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import uniqid from "uniqid";
import "./Win.css";

const Win = ({ time, reset, map, db }) => {
  async function addScore(e) {
    e.preventDefault();
    const input = document.getElementById("username");
    const validityState = input.validity;
    if (validityState.valueMissing) {
      input.setCustomValidity("Please enter a username");
      input.reportValidity();
    } else if (validityState.patternMismatch) {
      input.setCustomValidity("Only letters and numbers allowed for username");
      input.reportValidity();
    } else {
      const data = { [input.value + "#" + uniqid()]: time };
      await updateDoc(doc(db, "leaderboard", map), data);
      navigate("/leaderboard/" + map);
    }
  }

  let navigate = useNavigate();
  return (
    <div className="win-modal">
      <div className="win-modal-box">
        <form className="win-content">
          <h1>You Win!</h1>
          <p>You finished in {time}s</p>
          <input
            pattern="^[a-zA-Z0-9]+$"
            required
            id="username"
            type="text"
            autoComplete="off"
            placeholder="Enter Username"
          ></input>
          <div className="winBtns">
            <button type="button" onClick={reset}>
              Play Again
            </button>
            <button type="submit" onClick={(e) => addScore(e)}>
              Record Score
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Win;
