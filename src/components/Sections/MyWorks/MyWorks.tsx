import React from 'react';
import { Title } from '../../Title/Title';
import { ModalGallery } from '../../ModalGallery/ModalGallery';
import './MyWorks.scss';

export const MyWorks: React.FC = () => {
  const [openGallery, setOpenGallery] = React.useState<Boolean>(false);
  const [worksActive, setWorksActive] = React.useState<String>('');

  const closeClick = () => {
    setOpenGallery(false);
  };

  const clickWorks = (item: String) => {
    setOpenGallery(true);
    setWorksActive(item);
  };

  const myWorks = ['Тату', 'Зажившие тату', 'Эскизы'];

  return (
    <section className='works'>
      <h2 className='works__title'>
        <Title title={'my works'} color={'blue'} row={[2, 1]} />
      </h2>
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
      {openGallery && <ModalGallery clickClose={closeClick} item={worksActive} />}
    </section>
  );
};
