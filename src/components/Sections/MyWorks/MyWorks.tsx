import { Title } from '../../Title/Title';
import './MyWorks.scss';

export const MyWorks: React.FC = () => {
  const clickWorks = (item: String) => {
    console.log(item);
  };
  const myWorks = ['Тату', 'Зажившие тату', 'Эскизы'];
  return (
    <>
      <Title title={'my works'} color={'blue'} row={[2, 1]} />
      <div className='container'>
        <ul className='works__list'>
          {myWorks.map((item, i) => (
            <li className='works__item' key={i}>
              <a onClick={() => clickWorks(item)} className='works__link' href='#'>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
