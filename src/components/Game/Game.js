import React from "react";
import { useParams, Link } from "react-router-dom";
import circle from "./assets/select.svg";
import "./Game.css";

const Game = ({ mapInfo }) => {
  function imgClick(e) {
    const ele = document.getElementById("picker");
    ele.style.display = "block";
    const newLeft = window.innerWidth - 150 - e.pageX < ele.offsetWidth ? e.pageX - ele.offsetWidth - 50 : e.pageX + 50;
    const newTop = window.innerHeight - e.pageY < ele.offsetHeight ? e.pageY - ele.offsetHeight : e.pageY;
    ele.style.left = newLeft + "px";
    ele.style.top = newTop + "px";

    const circle = document.getElementById("picker-circle");
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
    circle.style.transform = "translate(-50px, -50px)";
    circle.style.display = "block";
  }

  function closePicker() {
    document.getElementById("picker").style.display = "none";
    document.getElementById("picker-circle").style.display = "none";
  }

  window.addEventListener("resize", closePicker);

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
      <div id="picker">
        <div className="picker-holder">{charList}</div>
      </div>
      <div id="picker-circle">
        <img src={circle} alt="" />
      </div>
    </div>
  );
};

export default Game;
