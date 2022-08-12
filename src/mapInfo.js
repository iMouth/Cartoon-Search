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

const mapInfo = {
  "universe-113": {
    map: universe113,
    name: "Universe 113",
    link: "universe-113",
    author: "by Egor Klyuchnyk",
    characters: [
      {
        img: bender,
        name: "Bender",
        show: "Futurama",
      },
      {
        img: arnold,
        name: "Arnold",
        show: "Hey Arnold!",
      },
      {
        img: phillip,
        name: "Phillip J. Fry",
        show: "Futurama",
      },
    ],
  },
  "the-loc-nar": {
    map: theLocNar,
    name: "The Loc Nar",
    link: "the-loc-nar",
    author: "by Egor Klyuchnyk",
    characters: [
      {
        img: johnny,
        name: "Johnny Bravo",
        show: "Johnny Bravo",
      },
      {
        img: ash,
        name: "Ash Ketchum",
        show: "Pokémon",
      },
      {
        img: sheen,
        name: "Sheen Estevez",
        show: "Adventures of Jimmy Neutron",
      },
    ],
  },
  "robot-city": {
    map: robotCity,
    name: "Robot City",
    link: "robot-city",
    author: "by Egor Klyuchnyk",
    characters: [
      {
        img: goku,
        name: "Goku",
        show: "Dragon Ball Z",
      },
      {
        img: mojo,
        name: "Mojo Jojo",
        show: "Powerpuff Girls",
      },
      {
        img: jason,
        name: "Jason Voorhees",
        show: "Friday the 13th",
      },
    ],
  },
};

export default mapInfo;
