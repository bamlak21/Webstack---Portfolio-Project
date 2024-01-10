import React from "react";
import Lazy from "../LazyLoading/Lazy";
import "./herocard.css";

const HeroCard = ({ image, para, title1, title2, url }) => {
  return (
    <section className="hero">
      <Lazy img={image} alt="" className="img" />
      <article className="content">
        <p>{para}</p>
        <h1>
          {title1} <br /> {title2}
        </h1>
        <p>cool / colorful / comfy</p>
        <button className="btn">{url}</button>
      </article>
    </section>
  );
};

export default HeroCard;
