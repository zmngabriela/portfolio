import { useTranslation } from 'react-i18next';

import Title from '../../components/Title';
import Avatar from '../../components/Avatar';
import Paragraph from '../../components/Paragraph';

import * as S from './styles';

type Props = {
  changeTheme: () => void;
};

const Sidebar = (props: Props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <S.Container>
      <Avatar />
      <Title fontSize={20}>{t('sidebar.name')}</Title>
      <Paragraph type="secondary" fontSize={16}>
        {t('sidebar.username')}
      </Paragraph>
      <S.Description type="principal" fontSize={12}>
        {t('sidebar.role')}
      </S.Description>
      <S.containerBtn>
        <S.BtnTheme onClick={props.changeTheme}>
          {t('sidebar.changeTheme')}
        </S.BtnTheme>
        <div>
          <S.BtnLang onClick={() => changeLanguage('en')}>EN</S.BtnLang>
          <S.BtnLang onClick={() => changeLanguage('es')}>ES</S.BtnLang>
        </div>
      </S.containerBtn>
    </S.Container>
  );
};

export default Sidebar;
