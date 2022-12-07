import './ModalGallery.scss';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCloseGallery } from '../../redux/gallerySlice';
import { WorksNav } from '../WorksNav/WorksNav';

export const ModalGallery: React.FC = () => {
  const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);
  const dispatch = useDispatch();

  return (
    <div className='modal' onClick={() => dispatch(setCloseGallery())}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <button className='modal__button-close' onClick={() => dispatch(setCloseGallery())}>
          Close
        </button>
        <WorksNav />
        <h2>{galleryActive}</h2>
      </div>
    </div>
  );
};
