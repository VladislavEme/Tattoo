import React from 'react';
import { Title } from '../../Title/Title';
import { ModalGallery } from '../ModalGallery/ModalGallery';
import './MyWorks.scss';

export const MyWorks: React.FC = () => {
  const [openGallery, setOpenGallery] = React.useState<Boolean>(false);

  const closeClick = () => {
    setOpenGallery(false);
  };

  const clickWorks = (item: String) => {
    setOpenGallery(true);
  };

  const myWorks = ['Тату', 'Зажившие тату', 'Эскизы'];
  return (
    <>
      <Title title={'my works'} color={'blue'} row={[2, 1]} />
      <div className='container'>
        <ul className='works__list'>
          {myWorks.map((item, i) => (
            <li className='works__item' key={i}>
              <a onClick={() => clickWorks(item)} className='works__link'>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {openGallery && <ModalGallery clickClose={closeClick} />}
    </>
  );
};
