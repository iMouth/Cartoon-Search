import React from "react";
import "./Characters.css";

const Characters = ({ characters }) => {
  const characterList = [];
  Object.keys(characters).forEach((character) => {
    const c = characters[character];
    characterList.push(
      <div className="character" key={character}>
        <img src={c.img} alt={character.name} />
        <div className="character-info">
          <p>{c.name}</p>
          <p>{c.show}</p>
        </div>
      </div>
    );
  });
  return <div className="Characters">{characterList}</div>;
};

export default Characters;
