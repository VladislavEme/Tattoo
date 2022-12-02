import React from 'react';
import './Title.scss';
import { Fade } from "react-awesome-reveal";

interface TitleType {
  title: string;
  color: string;
  row: number[];
}

export const Title: React.FC<TitleType> = ({ title, color, row }) => {
  const caption = [1, 2, 3];
  return (
    <section className="title">
      <div className="title__container">
        <Fade direction='left' triggerOnce>
          <div className="title__content-top title__content-wrapper">
            {caption.map((_, i) => (
              <span key={i} className={`title__content-${row[0] === i + 1 ? color : ''}`}>
                {title}&nbsp;
              </span>
            ))}
          </div>
        </Fade>
        <Fade direction='right' triggerOnce>
          <div className="title__content-bottom title__content-wrapper">
            {caption.map((_, i) => (
              <span key={i} className={`title__content-${row[1] === i + 1 ? color : ''}`}>
                {title}&nbsp;
              </span>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};
