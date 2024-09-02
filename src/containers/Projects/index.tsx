import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title';
import Project, { ProjectType } from '../../components/Project';

import * as S from './styles';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [projectsList, setProjectsList] = useState<ProjectType[]>([]);

  useEffect(() => {
    setProjectsList([
      {
        id: 1,
        title: t('projects.list.contactList.title'),
        description: t('projects.list.contactList.description'),
        linkGithub: 'https://github.com/zmngabriela/contact-list',
        linkVercel: 'https://contact-list-orcin.vercel.app/',
        image: 'https://i.postimg.cc/XvvFrdKS/contacts-list.jpg'
      },
      {
        id: 2,
        title: t('projects.list.portfolio.title'),
        description: t('projects.list.portfolio.description'),
        linkGithub: 'https://github.com/zmngabriela/portfolio',
        linkVercel: 'https://portfoliogzimmermann.vercel.app/',
        image: 'https://i.postimg.cc/mgdKMDzP/portfolio.jpg'
      },
      {
        id: 3,
        title: t('projects.list.renovationLandingPage.title'),
        description: t('projects.list.renovationLandingPage.description'),
        linkGithub: 'https://github.com/zmngabriela/landing-page',
        linkVercel: 'https://houserenovations.vercel.app/',
        image: 'https://i.postimg.cc/Hx2Q7W2Y/landing-page.jpg'
      },
      {
        id: 4,
        title: t('projects.list.toDoList.title'),
        description: t('projects.list.toDoList.description'),
        linkGithub: 'https://github.com/zmngabriela/todolist',
        linkVercel: 'https://todozmn.vercel.app/',
        image: 'https://i.postimg.cc/BvjNzTHS/todo.jpg'
      },
      {
        id: 5,
        title: t('projects.list.tasks.title'),
        description: t('projects.list.tasks.description'),
        linkGithub: 'https://github.com/zmngabriela/tasks',
        linkVercel: 'https://tasks-lyart.vercel.app/',
        image: 'https://i.postimg.cc/d0VMzYXv/tasks-list.jpg'
      },
      {
        id: 6,
        title: t('projects.list.yogaLandingPage.title'),
        description: t('projects.list.yogaLandingPage.description'),
        linkGithub: 'https://github.com/zmngabriela/landing-page-',
        linkVercel: 'https://landing-page-yoga.vercel.app',
        image: 'https://i.postimg.cc/262QqFWL/landing-page2.jpg'
      },
      {
        id: 7,
        title: t('projects.list.bmiCalculator.title'),
        description: t('projects.list.bmiCalculator.description'),
        linkGithub: 'https://github.com/zmngabriela/bmi-calculator',
        linkVercel: 'https://bmi-calculator-rust-eight.vercel.app/',
        image: 'https://i.postimg.cc/DzB3dCjZ/bmi-calculator.jpg'
      },
      {
        id: 8,
        title: t('projects.list.arithmeticCalculator.title'),
        description: t('projects.list.arithmeticCalculator.description'),
        linkGithub: 'https://github.com/zmngabriela/arithmetic-calculator',
        linkVercel: 'https://arithmetic-calculator-delta.vercel.app/',
        image: 'https://i.postimg.cc/3wKHGMZV/arithmetic-calculator.jpg'
      }
    ]);
  }, [i18n.language, t]);

  return (
    <section>
      <Title fontSize={16}>{t('projects.title')}</Title>
      <S.Projects>
        {projectsList.map((project) => (
          <li key={project.id}>
            <Project
              title={project.title}
              description={project.description}
              linkGithub={project.linkGithub}
              linkVercel={project.linkVercel}
              image={project.image}
            />
          </li>
        ))}
      </S.Projects>
    </section>
  );
};

export default Projects;
