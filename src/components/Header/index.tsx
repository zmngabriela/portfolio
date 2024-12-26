import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styles';

type Props = {
  toggleTheme: () => void;
};

const Header = ({ toggleTheme }: Props) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <S.Header>
      <S.Container className="left">
        <h1>Gabriela Zimmermann</h1>
        <h2>
          {t('navbar.role')
            .split(' ')
            .map((word, index) => (
              <>
                <span key={index}>{word[0]}</span>
                {word.slice(1)}
              </>
            ))}
        </h2>
      </S.Container>
      <S.Links className={menuOpen ? 'open' : ''}>
        <li>
          <a href="#projects">{t('navbar.projects')}</a>
        </li>
        <li>
          <a href="#about">{t('navbar.about')}</a>
        </li>
        <li>
          <a href="#contact">{t('navbar.contact')}</a>
        </li>
      </S.Links>
      <S.Container>
        <S.ToggleButton onClick={() => setMenuOpen(!menuOpen)} type="button">
          <img src="" alt="Toggle Menu" />
        </S.ToggleButton>
        <S.ThemeButton onClick={toggleTheme} type="button">
          <img src="" alt="Change Theme" />
        </S.ThemeButton>
        <select
          name="language"
          id="language"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </S.Container>
    </S.Header>
  );
};

export default Header;
