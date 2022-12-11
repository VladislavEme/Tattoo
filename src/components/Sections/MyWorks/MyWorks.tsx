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
import imgTattoo from '../../../assets/img/worksImg.json';

export const MyWorks: React.FC = () => {
  const openGallery = useSelector((state: RootState) => state.gallery.openGallery);
  const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);
  const dispatch = useDispatch();

  const imgData =
    galleryActive === 'Тату' ? imgTattoo[0] : galleryActive === 'Зажившие тату' ? imgTattoo[1] : imgTattoo[2];

  const clickAllWorks = () => {
    dispatch(setOpenGallery());
  };

  const [activeItemIndex, setActiveImageIndex] = useState<number>(0);

  return (
    <section className="works">
      <h2 className="works__title">
        <Title title={'my works'} color={'blue'} row={[2, 1]} />
      </h2>
      <div className="container">
        <div className="works__nav">
          <WorksNav resetActiveImg={setActiveImageIndex} />
        </div>

        <ItemsCarousel
          activeItemIndex={activeItemIndex}
          classes={{
            itemWrapper: 'img-wrapper',
            wrapper: `wrapper-slider`,
          }}
          chevronWidth={150}
          gutter={30}
          leftChevron={<button className="button__slider">&#8249;</button>}
          numberOfCards={3}
          outsideChevron
          requestToChangeActive={setActiveImageIndex}
          rightChevron={<button className="button__slider">&#8250;</button>}
          slidesToScroll={1}
        >
          {imgData.map((item: string, i: number) => (
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
