import { useTranslation } from 'react-i18next';

import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import * as S from './styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Title fontSize={16}>{t('about.title')}</Title>
      <Paragraph type="principal">{t('about.description')}</Paragraph>
      <S.GithubSection>
        <img
          src="https://github-readme-stats.vercel.app/api?username=zmngabriela&show_icons=false&theme=default&include_all_commits=false&count_private=true&hide=contribs"
          alt="GitHub Stats"
          id="github-stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=zmngabriela&theme=default&layout=compact&langs_count=6"
          alt="GitHub Most Used Languages"
          id="github-lang"
        />
      </S.GithubSection>
    </section>
  );
};

export default About;
