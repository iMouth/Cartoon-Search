import React from "react";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
import robotCity from "./assets/robot-city.jpeg";
import theLocNar from "./assets/the-loc-nar.jpeg";
import universe113 from "./assets/universe-113.jpeg";
import jason from "./assets/jason.jpeg";
import goku from "./assets/goku.webp";
import mojo from "./assets/mojo-jojo.webp";
import johnny from "./assets/johnny-bravo.jpeg";
import sheen from "./assets/sheen-estevez.jpeg";
import ash from "./assets/ash-ketchum.jpeg";
import arnold from "./assets/arnold.png";
import bender from "./assets/bender.jpeg";
import phillip from "./assets/phillip.png";

const Home = () => {
  let curSlide = 1;

  useEffect(() => {
    setImage(curSlide);
  }, []);

  function setImage(slide) {
    let prevSlide = curSlide;
    const pictures = document.getElementsByClassName("map-container");
    const dots = document.getElementsByClassName("dot");
    if (slide < 1) {
      curSlide = pictures.length;
    } else if (slide > pictures.length) {
      curSlide = 1;
    } else {
      curSlide = slide;
    }
    dots[prevSlide - 1].style.backgroundColor = "";
    dots[curSlide - 1].style.backgroundColor = "gray";
    pictures[prevSlide - 1].style.display = "none";
    pictures[curSlide - 1].style.display = "flex";
  }

  return (
    <div className="Home">
      <div className="home-container">
        <div className="map-container">
          <img src={robotCity} alt="" className="pic" />
          <div className="map">
            <div className="map-info">
              <h1>Robot City</h1>
              <p>by Egor Klyuchnyk</p>
            </div>
            <div className="character">
              <img src={goku} alt="Goku" className="goku" />
              <div className="character-info">
                <p>Goku</p>
                <p>Dragon Ball Z</p>
              </div>
            </div>
            <div className="character">
              <img src={mojo} alt="Mojo Jojo" className="mojo" />
              <div className="character-info">
                <p>Mojo Jojo</p>
                <p>The Powerpuff Girls</p>
              </div>
            </div>
            <div className="character">
              <img src={jason} alt="Jason Voorhees" />
              <div className="character-info">
                <p>Jason Voorhees</p>
                <p>Friday The 13th</p>
              </div>
            </div>
            <button className="start">Start</button>
          </div>
        </div>
        <div className="map-container">
          <img src={theLocNar} alt="" className="pic" />
          <div className="map">
            <div className="map-info">
              <h1>The Loc Nar</h1>
              <p>by Egor Klyuchnyk</p>
            </div>
            <div className="character">
              <img src={johnny} alt="Johnny Bravo" />
              <div className="character-info">
                <p>Johnny Bravo</p>
                <p>Johnny Bravo</p>
              </div>
            </div>
            <div className="character">
              <img src={ash} alt="Ash Ketchum" className="ash" />
              <div className="character-info">
                <p>Ash Ketchum</p>
                <p>Pokémon</p>
              </div>
            </div>
            <div className="character">
              <img src={sheen} alt="Sheen Estevez" />
              <div className="character-info">
                <p>Sheen Estevez</p>
                <p>Adventures of Jimmy Neutron</p>
              </div>
            </div>
            <button className="start">Start</button>
          </div>
        </div>
        <div className="map-container">
          <img src={universe113} alt="" className="pic" />
          <div className="map">
            <div className="map-info">
              <h1>Universe 113</h1>
              <p>by Egor Klyuchnyk</p>
            </div>
            <div className="character">
              <img src={bender} alt="Bender" />
              <div className="character-info">
                <p>Bender</p>
                <p>Futurama</p>
              </div>
            </div>
            <div className="character">
              <img src={arnold} alt="Arnold" className="arnold" />
              <div className="character-info">
                <p>Arnold</p>
                <p>Hey Arnold!</p>
              </div>
            </div>
            <div className="character">
              <img src={phillip} alt="Philip J. Fry" />
              <div className="character-info">
                <p>Philip J. Fry</p>
                <p>Futurama</p>
              </div>
            </div>
            <button className="start">Start</button>
          </div>
        </div>
        <div className="circle-container">
          <span className="dot" onClick={() => setImage(1)}></span>
          <span className="dot" onClick={() => setImage(2)}></span>
          <span className="dot" onClick={() => setImage(3)}></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
