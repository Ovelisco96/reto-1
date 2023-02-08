import React from "react";
import "./card_info.css";
import retro from "../../assets/image-retro-pcs.jpg";
const Card_Info = ({ card }) => {
  return (
    <article className="container-card">
      <div className="card-image">
        <img src={card.img} alt="" className="img" />
      </div>
      <aside className="card-info">
        <h2 className="card-number">{card.number}</h2>
        <h2 className="card-title">{card.title}</h2>
        <p className="card-text">{card.text}</p>
      </aside>
    </article>
  );
};

export default Card_Info;
