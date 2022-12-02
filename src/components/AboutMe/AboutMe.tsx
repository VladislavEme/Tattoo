import './AboutMe.scss';
import { Title } from '../Title/Title';
import fotoSelf from '../../assets/img/aboutMe/fotoSelf.png';
import { Fade } from "react-awesome-reveal";

export const AboutMe: React.FC = () => {
  return (
    <Fade triggerOnce>
      <section className="about-me">
        <div className="about-me__basic">
          <h2 className="about-me__title">
            <Title title={'about me'} color={'blue'} row={[0, 2]} />
          </h2>
          <div className="container">
            <div className="about-me__content">
              <Fade direction='left' triggerOnce>
                <img className="about-me__foto-self" src={fotoSelf} alt="Моя фотография" />
              </Fade>
              <Fade direction='right' triggerOnce>
                <div className="about-me__text">
                  <p>Привет, я Полина, твой тату-мастер.</p>
                  <p>
                    Мой опыт в создании тату - 3 года. Я работаю в уютной и комфортной студии у метро Обводный канал.
                  </p>
                  <p> Мои работы - маленькие украшения на всю жизнь.</p>
                  <p>
                    Я с большой любовью сделаю иллюстрацию на вашем теле, надпись своим почерком или шрифтом Брайля.
                  </p>
                  <p> Для своих тату я выбираю черный пигмент и грейвош, исключением могут стать красный и синий.</p>
                  <p> Я не повторяю свои эскизы и не делаю копии чужих работ.</p>
                  <p>Всегда смогу по референсам создать эскиз, в котором будут отражены мой стиль и частичка вас.</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};
