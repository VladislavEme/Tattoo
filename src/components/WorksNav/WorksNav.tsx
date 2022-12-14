import './WorksNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setGalleryActive, setCurrentPage } from '../../redux/gallerySlice';
import { RootState } from '../../redux/store';

type WorksNavProps = {
  resetActiveImg?: any;
  direction?: string;
};

export const WorksNav: React.FC<WorksNavProps> = ({ resetActiveImg, direction = 'row' }) => {
  const dispatch = useDispatch();
  const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);
  const currentPage = useSelector((state: RootState) => state.gallery.currentPage);
  const myWorks = ['Тату', 'Зажившие тату', 'Эскизы'];

  const clickWorks = (item: string) => {
    dispatch(setGalleryActive(item));
    if (resetActiveImg !== undefined) {
      resetActiveImg(0);
    }
    dispatch(setCurrentPage(1));
  };

  return (
    <ul className={`works-nav-${direction}__list`}>
      {myWorks.map((item, i) => (
        <li className={`works-nav-${direction}__item`} key={i}>
          <a className={item === galleryActive ? 'active' : ''} onClick={() => clickWorks(item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
