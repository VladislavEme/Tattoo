import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './MyWorks.scss';
import { Button } from '../../Button/Button';
import { Title } from '../../Title/Title';
import { ModalGallery } from '../../ModalGallery/ModalGallery';
import type { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenGallery, setStartActive } from '../../../redux/gallerySlice';
import { WorksNav } from '../../WorksNav/WorksNav';
import imgData from '../../../assets/img/worksImg.json';

export const MyWorks: React.FC = () => {
  const openGallery = useSelector((state: RootState) => state.gallery.openGallery);
  const startImg = useSelector((state: RootState) => state.gallery.startImg);
  const dispatch = useDispatch();

  const clickAllWorks = () => {
    dispatch(setOpenGallery());
  };

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 150;
  console.log(activeItemIndex);
  // const testImg = imgData[0].url;

  return (
    <section className='works'>
      <h2 className='works__title'>
        <Title title={'my works'} color={'blue'} row={[2, 1]} />
      </h2>
      <div className='container'>
        <div className='works__nav'>
          <WorksNav />
        </div>
        <div className='works__img'>
          {/* <button
            className='works__button button-left'
            onClick={() => {
              dispatch(setStartActive(-1));
            }}
          ></button>

          <img
            className='works__img-one'
            src={require(`../../../assets/img/galleryImg/tattoo/${startImg}.jpg`)}
            alt='Главное фото'
          />
          <img
            className='works__img-two'
            src={require(`../../../assets/img/galleryImg/tattoo/${startImg + 1}.jpg`)}
            alt='Главное фото'
          />

          <div className='works__block-img-three'>
            <img
              className='works__img-three'
              src={require(`../../../assets/img/galleryImg/tattoo/${startImg + 2}.jpg`)}
              alt='Главное фото'
            />
            <Button clickButton={clickAllWorks} title={'Показать все'} />
          </div>

          <button
            className='works__button button-right'
            onClick={() => {
              dispatch(setStartActive(+1));
            }}
          ></button> */}
        </div>

        <ItemsCarousel
          classes={{ itemWrapper: 'slider__wrapper' }}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={30}
          leftChevron={<button className='button__slider'>&#8249;</button>}
          rightChevron={<button className='button__slider'>&#8250;</button>}
          outsideChevron
          slidesToScroll={1}
          chevronWidth={chevronWidth}
        >
          {imgData.map((item, i) => (
            <img
              className={activeItemIndex + 1 === i ? 'img__slider-active' : 'img__slider'}
              // дописать условия: если activeItemIndex + 1, то это второй элемент, activeItemIndex + 2 - это третий элемент, activeItemIndex - это первый элемент
              src={item}
              alt={`Фото № ${i}`}
              key={i}
            />
          ))}
        </ItemsCarousel>

        {openGallery && <ModalGallery />}
      </div>

      <Button clickButton={clickAllWorks} title={'Показать все'} />
    </section>
  );
};
