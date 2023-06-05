import React, { useState } from "react";

import { CardComponentStyled } from "./card.styled";

export default function Card({ card }) {
  const [side, setSide] = useState();

  function handleClick() {
    setSide(!side);
  }
  return (
    <CardComponentStyled
      className={`card ${side ? "side" : ""}`}
      onClick={handleClick}
    >
      <small>
        <span>Flaskcard : {card?.idFlaskCard} </span>
        {card.id}
      </small>
      <div className="front">{card?.sidebefore}</div>
      <div className="back">{card?.sideafter}</div>
    </CardComponentStyled>
  );
}
