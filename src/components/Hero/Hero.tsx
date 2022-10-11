import React from "react";
import "./Hero.scss";
import faceHero from "../../assets/img/faceHero.png";
import mokingHero from "../../assets/img/mokingHero.png";
import brailleHero from "../../assets/img/brailleHero.png";
import { Button } from "../Button/Button";

export const Hero: React.FC = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__title-block">
            <h1 className="hero__title">MALAN</h1>
            <span className="hero__span">tattoo</span>
          </div>
          <div className="hero__content">
            <img src={faceHero} alt="Тату пришельцы" />
            <img src={mokingHero} alt="Тату издеваешься" />
            <div className="hero__button-block">
              <img
                className="hero__img-braille"
                src={brailleHero}
                alt="Тату Брайля"
              />
              <Button title={"Записаться"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
