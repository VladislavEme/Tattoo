import './WorksNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setGalleryActive } from '../../redux/gallerySlice';
import { RootState } from '../../redux/store';

type WorksNavProps = {
  resetActiveImg?: any;
};

export const WorksNav: React.FC<WorksNavProps> = ({ resetActiveImg }) => {
  const dispatch = useDispatch();
  const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);
  const myWorks = ['Тату', 'Зажившие тату', 'Эскизы'];

  const clickWorks = (item: string) => {
    dispatch(setGalleryActive(item));

    if (resetActiveImg !== undefined) {
      resetActiveImg(0);
    }
  };

  return (
    <ul className="works-nav__list">
      {myWorks.map((item, i) => (
        <li className="works-nav__item" key={i}>
          <a className={item === galleryActive ? 'active' : ''} onClick={() => clickWorks(item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
