import React from "react";
import Card_Info from "../Card_Info/Card_Info";
import card_info from "../../dummy/card-info";
import "./section2.css";
const Section2 = () => {
  console.log(card_info)
  return (
    <section className="container-section-2">
      {card_info.map((card => <Card_Info card={card} key={card.number}/>))}
    </section>
  );
};

export default Section2;
