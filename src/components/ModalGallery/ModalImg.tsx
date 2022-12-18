import { useSelector, useDispatch } from 'react-redux';
import { setIndexActivImg, setOpenImg } from '../../redux/gallerySlice';
import { RootState } from '../../redux/store';

export const ModalImg = () => {
  const dispatch = useDispatch();
  const imgData = useSelector((state: RootState) => state.gallery.imgData);
  const indexActivImg = useSelector((state: RootState) => state.gallery.indexActivImg);

  const closeImg = () => {
    dispatch(setOpenImg(false));
  };

  const clickBackNext = (i: number) => {
    i < 0 && indexActivImg === 0
      ? dispatch(setIndexActivImg(imgData.length - 1))
      : i > 0 && indexActivImg === imgData.length - 1
      ? dispatch(setIndexActivImg(0))
      : dispatch(setIndexActivImg(indexActivImg + i));
  };

  return (
    <div className='modal modal-img' onClick={() => closeImg()}>
      <button className='modal__button-close'>&#10006;</button>
      <div className='modal-img__content' onClick={(e) => e.stopPropagation()}>
        <button className='modal-img__button' onClick={() => clickBackNext(-1)}>
          <svg width='54' height='149' viewBox='0 0 54 149' fill='none'>
            <path d='M51 146L3 74.5L51 3' stroke='white' strokeWidth='6' strokeLinecap='round' />
          </svg>
        </button>
        <div>
          <span className='modal-img__current-img'>{`${indexActivImg + 1}/${imgData.length}`}</span>
          <img className='modal-img__image' src={imgData[indexActivImg]} alt={`Фото № ${indexActivImg + 1}`} />
        </div>
        <button className='modal-img__button' onClick={() => clickBackNext(1)}>
          <svg width='54' height='149' viewBox='0 0 54 149' fill='none'>
            <path d='M3 146L51 74.5L3 3' stroke='white' strokeWidth='6' strokeLinecap='round' />
          </svg>
        </button>
      </div>
    </div>
  );
};
