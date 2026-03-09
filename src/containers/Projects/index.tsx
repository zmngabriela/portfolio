import { useTranslation } from 'react-i18next';

import TextComponent from '../../components/TextComponent';
import ProjectsList from '../ProjectsList';

import workSpace from '../../assets/images/work-space.jpg';

import * as S from './styles';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <S.Section id="projects">
      <S.Container>
        <h3>{t('projects.title')}</h3>
      </S.Container>
      <ProjectsList />
      <S.Skills>
        <div>
          <TextComponent
            count="02."
            content={
              <p>
                {t('projects.skills.title')}
                <br />
                <span>JavaScript Frameworks:</span> React, Vue.js
                <br />
                <span>{t('projects.skills.state')}</span> Redux
                <br />
                <span>{t('projects.skills.preprocessors')}</span> SASS, LESS
                <br />
                <span>{t('projects.skills.testingTools')}</span> Jest, Testing
                Library, Cypress, Mock Service Worker
                <br />
                <span>JavaScript Libraries:</span> jQuery, Bootstrap, Tailwind,
                i18next internationalization-framework
                <br />
                <span>Task Runners / Module Bundlers:</span> Gulp, Webpack,
                Grunt
              </p>
            }
          />
          <TextComponent
            count="03."
            content={
              <p>
                <span>{t('projects.skills.versionControl')}</span> Git, GitHub{' '}
                <br />
                <span>{t('projects.skills.form')}</span> Formik, Yup, jQuery
                <br />
                <span>{t('projects.skills.crossBrowser')}:</span> Babel Compiler{' '}
                <br />
                {t('projects.skills.techniques')}
                <br />
                <span>{t('projects.skills.tools')}</span> Visual Studio Code,
                Figma, Jira, Adobe Photoshop and Illustrator
                <br />
                UI/UX Design
                <br />
                {t('projects.skills.responsiveness')}
                <br />
                {t('projects.skills.oop')}
              </p>
            }
          />
        </div>
        <img src={workSpace} alt="" />
      </S.Skills>
    </S.Section>
  );
};

export default Projects;
