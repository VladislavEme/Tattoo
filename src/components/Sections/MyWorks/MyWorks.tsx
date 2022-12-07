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
  const chevronWidth = 100;

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
        {/* <h2>{galleryActive}</h2> */}
        {openGallery && <ModalGallery />}
      </div>
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          infiniteLoop
          gutter={20}
          leftChevron={<button className='button__slider'>&#8249;</button>}
          rightChevron={<button className='button__slider'>&#8250;</button>}
          outsideChevron
          slidesToScroll={3}
          chevronWidth={chevronWidth}
        >
          {imgData.map((item, i) => (
            <img className='works__img-two' src={item} alt={`Фото № ${i}`} key={i} />
          ))}
        </ItemsCarousel>
      </div>
    </section>
  );
};
