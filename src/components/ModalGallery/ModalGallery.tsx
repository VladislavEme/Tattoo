import './ModalGallery.scss';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCloseGallery, setCurrentPage } from '../../redux/gallerySlice';
import { WorksNav } from '../WorksNav/WorksNav';

export const ModalGallery: React.FC = () => {
  const imgData = useSelector((state: RootState) => state.gallery.imgData);
  const currentPage = useSelector((state: RootState) => state.gallery.currentPage);

  const dispatch = useDispatch();

  const closeGallery = () => {
    dispatch(setCloseGallery());
  };

  const clickPageGallery = (i: number) => {
    dispatch(setCurrentPage(i + 1));
  };

  const pageImgData = imgData.filter((_, i) => i < currentPage * 7 && i >= (currentPage - 1) * 7);
  const amountPage = Math.ceil(imgData.length / 7);

  return (
    <div className="modal" onClick={() => closeGallery()}>
      <button className="modal__button-close">&#10006;</button>
      <div className="modal__window" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">
          <div className="modal__nav">
            <WorksNav direction={'column'} />
          </div>
          {pageImgData.map((item, i) => (
            <div className="modal__block" key={i}>
              <img className="modal__img" src={item} alt="" />
            </div>
          ))}
        </div>
        <div className="modal__pagination">
          {[...Array(amountPage)].map((_, i) => (
            <button
              className={`modal__pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => clickPageGallery(i)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
