import React from 'react';
import './MyWorks.scss';
import { Button } from '../../Button/Button';
import { Title } from '../../Title/Title';
import { ModalGallery } from '../../ModalGallery/ModalGallery';
import type { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenGallery, setGalleryActive } from '../../../redux/gallerySlice';
import { WorksNav } from './WorksNav';

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
        <WorksNav />
      </div>
      <h2>{galleryActive}</h2>
      <Button clickButton={clickAllWorks} title={'Показать все'} />
      {openGallery && <ModalGallery />}
    </section>
  );
};
