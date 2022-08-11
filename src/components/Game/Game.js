import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import circle from "./assets/select.svg";
import Timer from "./Timer";
import Win from "./Win";
import "./Game.css";

const Game = ({ mapInfo }) => {
  function imgClick(e) {
    const rect = e.target.getBoundingClientRect();
    const headerOffset = document.getElementById("Header").scrollHeight;
    x = e.clientX;
    y = e.clientY + headerOffset - rect.top;

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

  function checkImage(e) {
    const image = document.getElementsByClassName(map)[0].getBoundingClientRect();
    const headerOffset = document.getElementById("Header").scrollHeight;
    x = ((x * 100) / image.width).toFixed(1);
    y = (((y - headerOffset) * 100) / image.height).toFixed(1);
    //TODO: Move loc to firebase
    const imgX = loc[e.target.alt].x;
    const imgY = loc[e.target.alt].y;
    const testX = Math.abs(x - imgX) < 2;
    const testY = Math.abs(y - imgY) < 2;
    if (testX && testY) {
      if (!(e.target in foundChars)) {
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

  // Keeps Track of map click x and y coordinates
  let x, y;

  window.addEventListener("resize", closePicker);

  let { map } = useParams();
  let mapImg = null;
  if (map in mapInfo) mapImg = mapInfo[map].map;

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
        <img src={circle} alt="" />
      </div>
      {isGameOver ? <Win time={time} reset={resetGame} /> : null}
    </div>
  );
};

export default Game;
