import { useDispatch, useSelector } from 'react-redux';
import { setGalleryActive } from '../../../redux/gallerySlice';
import { RootState } from '../../../redux/store';

export const WorksNav = () => {
  const dispatch = useDispatch();
  const galleryActive = useSelector((state: RootState) => state.gallery.galleryActive);
  const myWorks = ['Тату', 'Зажившие тату', 'Эскизы'];

  const clickWorks = (item: string) => {
    dispatch(setGalleryActive(item));
  };

  return (
    <ul className='works__list'>
      {myWorks.map((item, i) => (
        <li className='works__item' key={i}>
          <a className={item === galleryActive ? 'active' : ''} onClick={() => clickWorks(item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
