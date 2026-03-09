import { useTranslation } from 'react-i18next';

import TextComponent from '../../components/TextComponent';

import hobbies from '../../assets/images/hobbies.jpg';

import * as S from './styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <S.Section id="about">
      <S.Main>
        <S.Container>
          <h3>
            {t('about.title')} <br />
            <span>Gabriela</span>?
          </h3>
          <TextComponent count="01" content={<p>{t('about.more')}</p>} />
          <TextComponent count="02" content={<p>{t('about.description')}</p>} />
        </S.Container>
      </S.Main>
      <S.Images>
        <img src={hobbies} alt="" />
      </S.Images>
    </S.Section>
  );
};

export default About;
