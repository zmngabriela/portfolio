import { useTranslation } from 'react-i18next';

import TextComponent from '../../components/TextComponent';

import me2 from '../../assets/2.jpg';
import me3 from '../../assets/3.jpg';

import * as S from './styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <S.Section id="about">
      <S.Main>
        <h3>
          {t('about.title')} <br />
          <span>Gabriela</span>?
        </h3>
        <S.Container>
          <TextComponent count="01" content={<p>{t('about.more')}</p>} />
          <div>
            <TextComponent
              count="02"
              content={<p>{t('about.description')}</p>}
            />
            <TextComponent count="03" content={<p>{t('about.extra')}</p>} />
          </div>
        </S.Container>
      </S.Main>
      <S.Images>
        <img src={me3} alt="" />
        <img src={me2} alt="" />
      </S.Images>
    </S.Section>
  );
};

export default About;
