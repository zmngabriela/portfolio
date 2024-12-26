import { useTranslation } from 'react-i18next';

import TextComponent from '../../components/TextComponent';
import ProjectsList from '../ProjectsList';

import me1 from '../../assets/1.jpg';

import * as S from './styles';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <S.Section id="projects">
      <S.Container>
        <h3>
          <span>(</span> {t('projects.title')} <span>)</span>
        </h3>
        <TextComponent count="01." content={<p>{t('projects.subtitle')}</p>} />
      </S.Container>
      <ProjectsList />
      <S.Skills>
        <div>
          <TextComponent
            count="02."
            content={
              <p>
                {t('projects.skills.title')} <br />
                <span>Preprocessors:</span> SASS, LESS CSS <br />
                <span>Frameworks:</span> Bootstrap <br />
                <span>JavaScript Libraries:</span> jQuery <br />
                <span>JavaScript Frameworks:</span> React, Vue.js <br />
                <span>Task Runners / Module Bundlers:</span> Gulp, Webpack{' '}
                <br />
                <span>{t('projects.skills.versionControl')}</span> Git, GitHub{' '}
                <br />
              </p>
            }
          />
          <TextComponent
            count="03."
            content={
              <p>
                <span>Single Page Applications (SPA):</span> React, Vue.js{' '}
                <br />
                Chrome DevTools <br />
                <span>{t('projects.skills.crossBrowser')}:</span> Babel Compiler{' '}
                <br />
                {t('projects.skills.techniques')} <br />
                <span>Tools and Software:</span> Visual Studio Code, Figma, Jira{' '}
                <br />
                UI/UX Design <br />
                {t('projects.skills.responsiveness')} <br />
                {t('projects.skills.oop')}
              </p>
            }
          />
        </div>
        <img src={me1} alt="" />
      </S.Skills>
    </S.Section>
  );
};

export default Projects;
