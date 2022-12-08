import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './MyWorks.scss';
import { Button } from '../../Button/Button';
import { Title } from '../../Title/Title';
import { ModalGallery } from '../../ModalGallery/ModalGallery';
import type { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenGallery } from '../../../redux/gallerySlice';
import { WorksNav } from '../../WorksNav/WorksNav';
import imgData from '../../../assets/img/worksImg.json';

export const MyWorks: React.FC = () => {
  const openGallery = useSelector(
    (state: RootState) => state.gallery.openGallery
  );
  const dispatch = useDispatch();

  const clickAllWorks = () => {
    dispatch(setOpenGallery());
  };

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 150;

  return (
    <section className="works">
      <h2 className="works__title">
        <Title title={'my works'} color={'blue'} row={[2, 1]} />
      </h2>
      <div className="container">
        <div className="works__nav">
          <WorksNav />
        </div>

        <ItemsCarousel
          classes={{ itemWrapper: 'img-wrapper', wrapper: 'wrapper-slider' }}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={30}
          leftChevron={<button className="button__slider">&#8249;</button>}
          rightChevron={<button className="button__slider">&#8250;</button>}
          outsideChevron
          slidesToScroll={1}
          chevronWidth={chevronWidth}
        >
          {imgData.map((item, i) => (
            <img
              className={
                activeItemIndex + 1 === i
                  ? 'img__slider-center'
                  : activeItemIndex === i
                  ? 'img__slider-left'
                  : activeItemIndex + 2 === i
                  ? 'img__slider-right'
                  : 'img__slider'
              }
              src={item}
              alt={`Фото № ${i}`}
              key={i}
            />
          ))}
        </ItemsCarousel>
        <div className="works__button">
          <Button clickButton={clickAllWorks} title={'Показать все'} />
        </div>

        {openGallery && <ModalGallery />}
      </div>
    </section>
  );
};
