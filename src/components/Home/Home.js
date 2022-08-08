import React from "react";
import { useEffect, useState, Link } from "react";
import { useNavigate } from "react-router-dom";
import back from "./assets/back.png";
import next from "./assets/next.png";
import "./Home.css";

const Home = ({ mapInfo }) => {
  let navigate = useNavigate();
  let curSlide = 1;
  useEffect(() => {
    setImage(curSlide);
  }, []);

  function arrowClick(slide) {
    setImage(slide + curSlide);
  }

  function setImage(slide) {
    let prevSlide = curSlide;
    const pictures = document.getElementsByClassName("map-container");
    const dots = document.getElementsByClassName("dot");

    if (slide < 1) curSlide = pictures.length;
    else if (slide > pictures.length) curSlide = 1;
    else curSlide = slide;

    dots[prevSlide - 1].style.backgroundColor = "";
    dots[curSlide - 1].style.backgroundColor = "gray";
    pictures[prevSlide - 1].style.display = "none";
    pictures[curSlide - 1].style.display = "flex";
  }

  return (
    <div className="Home">
      <div className="move-btn-back" onClick={() => arrowClick(-1)}>
        <button type="button" className="move move-back">
          <img src={back} alt="" className="back" />
        </button>
      </div>
      <div className="home-container">
        <div className="map-container">
          <img src={mapInfo["robot-city"].map} alt="" className="pic" />
          <div className="map">
            <div className="map-info">
              <h1>Robot City</h1>
              <p>by Egor Klyuchnyk</p>
            </div>
            <div className="character">
              <img src={mapInfo["robot-city"].characters[0]} alt="Goku" className="goku" />
              <div className="character-info">
                <p>Goku</p>
                <p>Dragon Ball Z</p>
              </div>
            </div>
            <div className="character">
              <img src={mapInfo["robot-city"].characters[1]} alt="Mojo Jojo" className="mojo" />
              <div className="character-info">
                <p>Mojo Jojo</p>
                <p>The Powerpuff Girls</p>
              </div>
            </div>
            <div className="character">
              <img src={mapInfo["robot-city"].characters[2]} alt="Jason Voorhees" />
              <div className="character-info">
                <p>Jason Voorhees</p>
                <p>Friday The 13th</p>
              </div>
            </div>
            <button className="start" onClick={() => navigate(`game/robot-city`)}>
              Start
            </button>
          </div>
        </div>
        <div className="map-container">
          <img src={mapInfo["the-loc-nar"].map} alt="" className="pic" />
          <div className="map">
            <div className="map-info">
              <h1>The Loc Nar</h1>
              <p>by Egor Klyuchnyk</p>
            </div>
            <div className="character">
              <img src={mapInfo["the-loc-nar"].characters[0]} alt="Johnny Bravo" />
              <div className="character-info">
                <p>Johnny Bravo</p>
                <p>Johnny Bravo</p>
              </div>
            </div>
            <div className="character">
              <img src={mapInfo["the-loc-nar"].characters[1]} alt="Ash Ketchum" className="ash" />
              <div className="character-info">
                <p>Ash Ketchum</p>
                <p>Pokémon</p>
              </div>
            </div>
            <div className="character">
              <img src={mapInfo["the-loc-nar"].characters[2]} alt="Sheen Estevez" />
              <div className="character-info">
                <p>Sheen Estevez</p>
                <p>Adventures of Jimmy Neutron</p>
              </div>
            </div>
            <button className="start" onClick={() => navigate(`game/the-loc-nar`)}>
              Start
            </button>
          </div>
        </div>
        <div className="map-container">
          <img src={mapInfo["universe-113"].map} alt="" className="pic" />
          <div className="map">
            <div className="map-info">
              <h1>Universe 113</h1>
              <p>by Egor Klyuchnyk</p>
            </div>
            <div className="character">
              <img src={mapInfo["universe-113"].characters[0]} alt="Bender" />
              <div className="character-info">
                <p>Bender</p>
                <p>Futurama</p>
              </div>
            </div>
            <div className="character">
              <img src={mapInfo["universe-113"].characters[1]} alt="Arnold" className="arnold" />
              <div className="character-info">
                <p>Arnold</p>
                <p>Hey Arnold!</p>
              </div>
            </div>
            <div className="character">
              <img src={mapInfo["universe-113"].characters[2]} alt="Philip J. Fry" />
              <div className="character-info">
                <p>Philip J. Fry</p>
                <p>Futurama</p>
              </div>
            </div>
            <button className="start" onClick={() => navigate(`game/universe-113`)}>
              Start
            </button>
          </div>
        </div>
        <div className="circle-container">
          <span className="dot" onClick={() => setImage(1)}></span>
          <span className="dot" onClick={() => setImage(2)}></span>
          <span className="dot" onClick={() => setImage(3)}></span>
        </div>
      </div>
      <div className="move-btn-next" onClick={() => arrowClick(1)}>
        <button type="button" className="move move-next">
          <img src={next} alt="" className="next" />
        </button>
      </div>
    </div>
  );
};

export default Home;
