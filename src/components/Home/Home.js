import React from "react";
import { useEffect, useState, Link } from "react";
import back from "./assets/back.png";
import next from "./assets/next.png";
import Map from "./Map";
import "./Home.css";

const Home = ({ mapInfo }) => {
  useEffect(() => {
    setImage(curSlide);
  }, []);

  function arrowClick(slide) {
    setImage(slide + curSlide);
  }

  function setImage(slide) {
    let prevSlide = curSlide;
    const pictures = document.getElementsByClassName("Map");
    const dots = document.getElementsByClassName("dot");

    if (slide < 1) curSlide = pictures.length;
    else if (slide > pictures.length) curSlide = 1;
    else curSlide = slide;

    dots[prevSlide - 1].style.backgroundColor = "";
    dots[curSlide - 1].style.backgroundColor = "gray";
    pictures[prevSlide - 1].style.display = "none";
    pictures[curSlide - 1].style.display = "flex";
  }

  let curSlide = 1;
  const maps = [];
  const dots = [];
  Object.keys(mapInfo).forEach((map, index) => {
    maps.push(<Map key={index} map={mapInfo[map]} />);
    dots.push(<span key={index} className="dot" onClick={() => setImage(index)}></span>);
  });

  return (
    <div className="Home">
      <div className="move-btn-back" onClick={() => arrowClick(-1)}>
        <button type="button" className="move move-back">
          <img src={back} alt="" className="back" />
        </button>
      </div>
      <div className="home-container">
        {maps}
        <div className="circle-container">{dots}</div>
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
