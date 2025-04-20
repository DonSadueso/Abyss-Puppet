// src/components/GameRecentCard.jsx
import React from "react";
import "../Style/View_Game_Recent.css";

const GameRecentCard = ({ image, name, stars, description, onButtonClick }) => {
  return (
    <div className="Game_Recent">
      <div
        className="Game_Recent_Img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="Game_Recent_Info">
        <div className="Game_Recent_Header_Name">
          <h1 className="Game_Recent_Name">{name}</h1>
          <p className="Game_Recent_Star">{stars}</p>
        </div>
        <p className="Game_Recent_Text">{description}</p>
        <button className="Game_Recent_Button" onClick={onButtonClick}>
          PressMe
        </button>
      </div>
    </div>
  );
};

export default GameRecentCard;
