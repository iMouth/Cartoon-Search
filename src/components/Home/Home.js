import React from "react";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
import robotCity from "./assets/robot-city.jpeg";
import theLocNar from "./assets/the-loc-nar.jpeg";
import universe113 from "./assets/universe-113.jpeg";
import jason from "./assets/jason.jpeg";
import goku from "./assets/goku.webp";
import mojo from "./assets/mojo-jojo.webp";

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
        </div>
        <div className="map-container">
          <img src={universe113} alt="" className="pic" />
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
