import './ModalGallery.scss';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCloseGallery,
  setCurrentPage,
  setStepPage,
  setImgDataPage,
  setIsLoadingGallery,
  setIsLoadingPage,
} from '../../redux/gallerySlice';
import { WorksNav } from '../WorksNav/WorksNav';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import React from 'react';
import axios from 'axios';

export const ModalGallery: React.FC = () => {
  // const imgData = useSelector((state: RootState) => state.gallery.imgData);
  const currentPage = useSelector((state: RootState) => state.gallery.currentPage);
  const isLoadingGallery = useSelector((state: RootState) => state.gallery.isLoadingGallery);
  const amountPage = useSelector((state: RootState) => state.gallery.amountPage);
  const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);
  const imgDataPage = useSelector((state: RootState) => state.gallery.imgDataPage);
  const isLoadingPage = useSelector((state: RootState) => state.gallery.isLoadingPage);

  const dispatch = useDispatch();

  const closeGallery = () => {
    dispatch(setCloseGallery());
  };

  const clickPageGallery = (i: number) => {
    dispatch(setCurrentPage(i + 1));
  };

  const clickStepPage = (i: number) => {
    dispatch(setStepPage(i));
  };

  // const pageImgData = imgData.filter((_, i) => i < currentPage * 7 && i >= (currentPage - 1) * 7);

  React.useEffect(() => {
    dispatch(setIsLoadingPage(false));
    const urlArr = galleryActive === 'Тату' ? 'tattoo' : galleryActive === 'Зажившие тату' ? 'healed' : 'sketches';
    const url = `https://630b29edf280658a59d6fa81.mockapi.io/tattooImg/?type=${urlArr}&p=${currentPage}&l=7`;

    axios.get(url).then((resp) => {
      const data = resp.data.map((item: any) => {
        return item.url;
      });
      dispatch(setImgDataPage(data));
      dispatch(setIsLoadingPage(true));
    });
  }, [currentPage, galleryActive]);

  return (
    <div className="modal" onClick={() => closeGallery()}>
      <button className="modal__button-close">&#10006;</button>
      <div className="modal__window" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">
          <div className="modal__nav">
            <WorksNav direction={'column'} />
          </div>
          {isLoadingPage ? (
            imgDataPage.map((item, i) => (
              <div className="modal__block" key={i}>
                <img className="modal__img" src={item} alt="" />
              </div>
            ))
          ) : (
            <div className="modal__loading">
              <LoadingAnimation />
            </div>
          )}
        </div>
        <div className="modal__pagination">
          <button
            className={`modal__button-back ${currentPage < 2 ? 'disabled' : ''}`}
            onClick={() => clickStepPage(-1)}
          >
            &#8249;
          </button>

          {[...Array(amountPage)].map((_, i) => (
            <button
              className={`modal__button-page ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => clickPageGallery(i)}
              key={i}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`modal__button-next ${currentPage === amountPage ? 'disabled' : ''}`}
            onClick={() => clickStepPage(1)}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};
