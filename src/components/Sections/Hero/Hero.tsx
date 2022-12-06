import React from 'react';
import './Hero.scss';
import faceHero from '../../../assets/img/hero/faceHero.png';
import mokingHero from '../../../assets/img/hero/mokingHero.png';
import brailleHero from '../../../assets/img/hero/brailleHero.png';
import { Button } from '../../Button/Button';
import { Fade } from 'react-awesome-reveal';

export const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__container'>
          <Fade direction='down' triggerOnce>
            <div className='hero__title-block'>
              <h1 className='hero__title'>MALAN</h1>
              <span className='hero__span'>tattoo</span>
            </div>
          </Fade>
          <div className='hero__content'>
            <Fade direction='left' triggerOnce>
              <img className='hero__img-face' src={faceHero} alt='Тату пришельцы' />
            </Fade>
            <Fade direction='up' triggerOnce>
              <img className='hero__img-moking' src={mokingHero} alt='Тату издеваешься' />
            </Fade>
            <Fade direction='right' triggerOnce>
              <div className='hero__button-block'>
                <img className='hero__img-braille' src={brailleHero} alt='Тату Брайля' />
                <Button clickButton={() => {}} title={'Записаться'} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
