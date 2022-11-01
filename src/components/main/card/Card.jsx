import React from "react";
import {cards} from "../../../Data/Data";
import "./Card.scss"
const Card = () => {
  return <section className="cards">
    {
      cards.map((card)=>(
        <div className="card" key={card.id}>
          <div className="imgSide" >
            <img src={card.cover} alt="" />
          </div>
          <div className="infoSide">
            <h4>{card.name}</h4>
            <p>{card.items}</p>
          </div>
        </div>
      ))
    }

  </section>;
};

export default Card;
