import { useTranslation } from 'react-i18next';

import image from '../../assets/images/footer.jpg';

import * as S from './styles';

const Contact = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <S.Section id="contact">
      <S.Container className="info">
        <h3>
          {t('contact.title')
            .split(' ')
            .map((word, index) => (
              <>
                <span key={index}>{word[0]}</span>
                {word.slice(1)}
              </>
            ))}
        </h3>
        <div>
          <p>{t('contact.contact')}</p>
          <ul>
            <li>
              <a href="mailto:zmngabriela@gmail.com">
                <span>E-mail: zmngabriela@gmail.com</span>
              </a>
            </li>
            <li>
              <p>
                <a href="tel:605145486">
                  <span>{t('contact.phone')}: +34 605145486</span>
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.linkedin.com/in/zmngabriela/">
                  <span>Linkedin</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p>{t('contact.subtitle')}</p>
          <ul>
            <li>
              <p>
                <a
                  href="https://github.com/zmngabriela"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Github</span>
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://vercel.com/zmngabrielas-projects"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Vercel</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
        <p>
          <span>&copy; {year}</span>
        </p>
      </S.Container>
      <img src={image} alt="" />
    </S.Section>
  );
};

export default Contact;
