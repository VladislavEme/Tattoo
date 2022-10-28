import React from "react";
import "./Title.scss";
import Fade from "react-reveal/Fade";

interface TitleType {
  title: string;
  color: string;
  row: [number[], number[]];
}

export const Title: React.FC<TitleType> = ({ title, color, row }) => {
  return (
    <section className="title">
      <div className="title__container">
        <div className="title__title">
          <Fade right>
            <div className="title__content-top title__content-wrapper">
              <span
                className={`title__content-${
                  row[0][0] === 1 && row[0][1] === 1 ? color : ""
                }`}
              >
                {title}&nbsp;
              </span>
              <span
                className={`title__content-${
                  row[0][0] === 1 && row[0][1] === 2 ? color : ""
                }`}
              >
                {title}&nbsp;
              </span>
              <span
                className={`title__content-${
                  row[0][0] === 1 && row[0][1] === 3 ? color : ""
                }`}
              >
                {title}&nbsp;
              </span>
            </div>
          </Fade>
          <Fade left>
            <div className="title__content-bottom title__content-wrapper">
              <span
                className={`title__content-${
                  row[1][0] === 2 && row[1][1] === 1 ? color : ""
                }`}
              >
                {title}&nbsp;
              </span>
              <span
                className={`title__content-${
                  row[1][0] === 2 && row[1][1] === 2 ? color : ""
                }`}
              >
                {title}&nbsp;
              </span>
              <span
                className={`title__content-${
                  row[1][0] === 2 && row[1][1] === 3 ? color : ""
                }`}
              >
                {title}&nbsp;
              </span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};
