import './ModalGallery.scss';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCloseGallery } from '../../redux/gallerySlice';
import { WorksNav } from '../WorksNav/WorksNav';

export const ModalGallery: React.FC = () => {
  // const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);

  const dispatch = useDispatch();

  const closeGallery = () => {
    dispatch(setCloseGallery());
  };
  return (
    <div className='modal' onClick={() => closeGallery()}>
      <button className='modal__button-close'>&#10006;</button>
      <div className='modal__window' onClick={(e) => e.stopPropagation()}>
        <div className='modal__content'>
          <div className='modal__nav'>
            <WorksNav direction={'column'} />
          </div>
          <div className='modal__block'></div>
          <div className='modal__block'></div>
          <div className='modal__block'></div>
          <div className='modal__block'></div>
          <div className='modal__block'></div>
          <div className='modal__block'></div>
          <div className='modal__block'></div>
        </div>
        <h2>1 2 3</h2>
      </div>
    </div>
  );
};
