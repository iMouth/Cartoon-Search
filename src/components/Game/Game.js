import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import circleBig from "./assets/select.svg";
import circleSmall from "./assets/select-small.svg";
import Timer from "./Timer";
import Win from "./Win";
import "./Game.css";

const Game = ({ mapInfo }) => {
  function imgClick(e) {
    const rect = e.target.getBoundingClientRect();
    const headerOffset = document.getElementById("Header").scrollHeight;
    const x = e.clientX;
    const y = e.clientY + headerOffset - rect.top;

    let circleRadius = pickerCircle.type === "big" ? 50 : 25;

    setClickCoords({ x: x, y: y });
    if (window.innerWidth < 1000) {
      setPickerCircle({ circle: circleSmall, type: "small" });
      circleRadius = 25;
    } else {
      setPickerCircle({ circle: circleBig, type: "big" });
      circleRadius = 50;
    }
    const ele = document.getElementById("picker");
    ele.style.display = "block";

    console.log(circleRadius);
    const newLeft =
      window.innerWidth - 150 - e.pageX < ele.offsetWidth
        ? e.pageX - ele.offsetWidth - circleRadius
        : e.pageX + circleRadius;
    const newTop = window.innerHeight - e.pageY < ele.offsetHeight ? e.pageY - ele.offsetHeight : e.pageY;
    ele.style.left = newLeft + "px";
    ele.style.top = newTop + "px";

    const circle = document.getElementById("picker-circle");
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
    circle.style.transform = `translate(-${circleRadius}px, -${circleRadius}px)`;
    circle.style.display = "block";
  }

  function closePicker(e) {
    const picker = document.getElementById("picker").style.display;
    if (picker !== "none") {
      document.getElementById("picker").style.display = "none";
      document.getElementById("picker-circle").style.display = "none";
    }
  }

  function checkImage(e) {
    const image = document.getElementsByClassName(map)[0].getBoundingClientRect();
    const headerOffset = document.getElementById("Header").scrollHeight;

    const x = ((clickCoords.x * 100) / image.width).toFixed(1);
    const y = (((clickCoords.y - headerOffset) * 100) / image.height).toFixed(1);
    console.log(x);
    //TODO: Move loc to firebase
    const imgX = loc[e.target.alt].x;
    const imgY = loc[e.target.alt].y;
    const errorBox = pickerCircle.type === "big" ? 2 : 4;
    const testX = Math.abs(x - imgX) < errorBox;
    const testY = Math.abs(y - imgY) < errorBox;
    console.log(testX, testY, x, y, imgX, imgY);
    if (testX && testY) {
      if (!foundChars.includes(e.target)) {
        foundChars.push(e.target);
        setFoundChars(() => foundChars);
        const charImgs = document.querySelectorAll(`img[alt="${e.target.alt}"]`);
        charImgs.forEach((img) => {
          img.style.filter = "grayscale(100%)";
        });
        setPickedStyle({ bgColor: "green", text: `You Found ${e.target.alt}!` });
        if (foundChars.length === charList.length) win();
      }
    } else {
      setPickedStyle({ bgColor: "red", text: `Keep Looking!` });
    }
    setPicked(() => true);
    setTimeout(() => {
      setPicked(() => false);
    }, 2000);
    closePicker();
  }

  function win() {
    console.log("WON");
    const timeTaken = (Date.now() - time) / 1000;
    setTime(() => timeTaken);
    setIsGameOver(() => true);
  }

  function resetGame() {
    setIsGameOver(() => false);
    setTime(() => Date.now());
    setPicked(() => false);
    setPickedStyle(() => {});
    setFoundChars(() => []);
    const charImgs = document.querySelectorAll(`.charIcon`);
    console.log(charImgs);
    charImgs.forEach((img) => {
      img.style.filter = "";
    });
  }

  const loc = {
    Bender: {
      x: 90.9,
      y: 70.4,
    },
    "Phillip J. Fry": {
      x: 37.0,
      y: 17.1,
    },
    Arnold: {
      x: 42.7,
      y: 62.4,
    },
    "Johnny Bravo": {
      x: 44.0,
      y: 78.8,
    },
    "Sheen Estevez": {
      x: 93.1,
      y: 78.0,
    },
    "Ash Ketchum": {
      x: 2.7,
      y: 87.3,
    },
    "Mojo Jojo": {
      x: 23.5,
      y: 45.4,
    },
    "Jason Voorhees": {
      x: 56.4,
      y: 34.9,
    },
    Goku: {
      x: 65.4,
      y: 64.3,
    },
  };

  const [isGameOver, setIsGameOver] = useState(false);
  const [time, setTime] = useState(Date.now());
  const [picked, setPicked] = useState(false);
  const [pickedStyle, setPickedStyle] = useState({});
  const [foundChars, setFoundChars] = useState([]);
  const [pickerCircle, setPickerCircle] = useState({ circle: circleBig, type: "big" });
  const [clickCoords, setClickCoords] = useState({});

  let { map } = useParams();
  let mapImg = null;
  if (map in mapInfo) mapImg = mapInfo[map].map;

  window.addEventListener("resize", closePicker);

  const chars = mapInfo[map].characters;
  const charList = [];
  Object.keys(chars).forEach((char) => {
    charList.push(
      <img key={char} className="charIcon" src={chars[char].img} alt={chars[char].name} onClick={checkImage} />
    );
  });

  return (
    <div id="Game">
      <div id="Header">
        <Link to="/">&#x2190;</Link>
        <p>
          <Timer isGameOver={isGameOver} />
        </p>
        <div className="characters">{charList}</div>
        <Link to={"/leaderboard/" + map}>Leaderboard</Link>
      </div>
      {picked ? (
        <div style={{ backgroundColor: pickedStyle.bgColor }} id="picked">
          {pickedStyle.text}
        </div>
      ) : null}
      <img className={map} src={mapImg} alt="" onClick={(e) => imgClick(e)} />
      <div id="picker">
        <div className="picker-holder">{charList}</div>
      </div>
      <div id="picker-circle">
        <img src={pickerCircle.circle} alt="" />
      </div>
      {isGameOver ? <Win time={time} reset={resetGame} map={map} /> : null}
    </div>
  );
};

export default Game;
