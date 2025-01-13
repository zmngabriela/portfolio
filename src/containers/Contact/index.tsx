import { useTranslation } from 'react-i18next';

import me7 from '../../assets/7.jpg';

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
          <p>
            <span>{t('contact.contact')}</span>
          </p>
          <ul>
            <li>
              <a href="mailto:zmngabriela@gmail.com">
                E-mail: zmngabriela@gmail.com
              </a>
            </li>
            <li>
              <p>
                <a href="tel:605145486">{t('contact.phone')}: +34 605145486</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.linkedin.com/in/zmngabriela/">Linkedin</a>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <span>{t('contact.subtitle')}</span>
          </p>
          <ul>
            <li>
              <p>
                <a
                  href="https://github.com/zmngabriela"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
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
                  Vercel
                </a>
              </p>
            </li>
          </ul>
        </div>
        <p>
          <span>&copy; {year}</span>
        </p>
      </S.Container>
      <img src={me7} alt="" />
    </S.Section>
  );
};

export default Contact;
