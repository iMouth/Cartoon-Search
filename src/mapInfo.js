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
    characters: [bender, arnold, phillip],
  },
  "the-loc-nar": {
    map: theLocNar,
    characters: [johnny, ash, sheen],
  },
  "robot-city": {
    map: robotCity,
    characters: [goku, mojo, jason],
  },
};

export default mapInfo;
