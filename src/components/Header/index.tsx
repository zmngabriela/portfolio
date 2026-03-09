import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styles';

type Props = {
  toggleTheme: () => void;
};

const Header = ({ toggleTheme }: Props) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const openNavRef = useRef<HTMLUListElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openNavRef.current &&
        toggleRef.current &&
        !openNavRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openNavRef]);

  useEffect(() => {
    const closeOpenNav = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', closeOpenNav);
    return () => window.removeEventListener('resize', closeOpenNav);
  }, []);

  return (
    <S.Header>
      <S.Container className="left">
        <h1>Gabriela Zimmermann</h1>
        <h2>{t('navbar.role')}</h2>
      </S.Container>
      <S.Links className={menuOpen ? 'open' : ''} ref={openNavRef}>
        <li>
          <a href="#about">{t('navbar.about')}</a>
        </li>
        <li>
          <a href="#contact">{t('navbar.contact')}</a>
        </li>
      </S.Links>
      <S.Container>
        <S.ToggleButton
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          ref={toggleRef}
        >
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
          <option value="en">{t('languages.english')}</option>
          <option value="es">{t('languages.spanish')}</option>
          <option value="pt">{t('languages.portuguese')}</option>
        </select>
      </S.Container>
    </S.Header>
  );
};

export default Header;
