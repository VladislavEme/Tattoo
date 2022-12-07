import React from 'react';
import './MyWorks.scss';
import { Button } from '../../Button/Button';
import { Title } from '../../Title/Title';
import { ModalGallery } from '../../ModalGallery/ModalGallery';
import type { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenGallery } from '../../../redux/gallerySlice';
import { WorksNav } from '../../WorksNav/WorksNav';
import arrowRight from '../../../assets/img/myWorks/arrowRight.svg';
import arrowLeft from '../../../assets/img/myWorks/arrowLeft.svg';

export const MyWorks: React.FC = () => {
  const openGallery = useSelector((state: RootState) => state.gallery.openGallery);
  const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);
  const dispatch = useDispatch();

  const clickAllWorks = () => {
    dispatch(setOpenGallery());
  };

  return (
    <section className='works'>
      <h2 className='works__title'>
        <Title title={'my works'} color={'blue'} row={[2, 1]} />
      </h2>
      <div className='container'>
        <div className='works__nav'>
          <img src={arrowLeft} alt='Стрелка влево' />
          <WorksNav />
          <img src={arrowRight} alt='Стрелка вправо' />
        </div>
        <div className='works__img'>
          <div className='works__img-one'></div>
          <div className='works__img-two'></div>
          <div className='works__img-three'></div>
        </div>

        <h2>{galleryActive}</h2>

        <Button clickButton={clickAllWorks} title={'Показать все'} />
        {openGallery && <ModalGallery />}
      </div>
    </section>
  );
};
