import React from "react";
import "./Hero.scss";
import faceHero from "../../assets/img/hero/faceHero.png";
import mokingHero from "../../assets/img/hero/mokingHero.png";
import brailleHero from "../../assets/img/hero/brailleHero.png";
import malan from "../../assets/img/hero/title.svg";
import { Button } from "../Button/Button";

export const Hero: React.FC = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__container">
            <div className="hero__title-block">
              <h1 className="hero__title">
                <img src={malan} alt="Заголовок" />
              </h1>
              <span className="hero__span">tattoo</span>
            </div>
            <div className="hero__content">
              <img
                className="hero__img-face"
                src={faceHero}
                alt="Тату пришельцы"
              />
              <img
                className="hero__img-moking"
                src={mokingHero}
                alt="Тату издеваешься"
              />
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
        </div>
      </section>
    </main>
  );
};
