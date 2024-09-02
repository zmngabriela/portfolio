import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title';
import Project from '../../components/Project';

import * as S from './styles';

const Projects = () => {
  const { t } = useTranslation();

  const [projectsList] = useState([
    {
      title: t('projects.list.contactList.title'),
      description: t('projects.list.contactList.description'),
      linkGithub: 'https://github.com/zmngabriela/contact-list',
      linkVercel: 'https://contact-list-orcin.vercel.app/',
      image: 'https://i.postimg.cc/XvvFrdKS/contacts-list.jpg'
    },
    {
      title: t('projects.list.portfolio.title'),
      description: t('projects.list.portfolio.description'),
      linkGithub: 'https://github.com/zmngabriela/portfolio',
      linkVercel: 'https://portfoliogzimmermann.vercel.app/',
      image: 'https://i.postimg.cc/v8tG3rJF/portfolio.jpg'
    },
    {
      title: t('projects.list.renovationLandingPage.title'),
      description: t('projects.list.renovationLandingPage.description'),
      linkGithub: 'https://github.com/zmngabriela/landing-page',
      linkVercel: 'https://houserenovations.vercel.app/',
      image: 'https://i.postimg.cc/Hx2Q7W2Y/landing-page.jpg'
    },
    {
      title: t('projects.list.toDoList.title'),
      description: t('projects.list.toDoList.description'),
      linkGithub: 'https://github.com/zmngabriela/todolist',
      linkVercel: 'https://todozmn.vercel.app/',
      image: 'https://i.postimg.cc/BvjNzTHS/todo.jpg'
    },
    {
      title: t('projects.list.arithmeticCalculator.title'),
      description: t('projects.list.arithmeticCalculator.description'),
      linkGithub: 'https://github.com/zmngabriela/arithmetic-calculator',
      linkVercel: 'https://arithmetic-calculator-delta.vercel.app/',
      image: 'https://i.postimg.cc/3wKHGMZV/arithmetic-calculator.jpg'
    },
    {
      title: t('projects.list.tasks.title'),
      description: t('projects.list.tasks.description'),
      linkGithub: 'https://github.com/zmngabriela/tasks',
      linkVercel: 'https://tasks-lyart.vercel.app/',
      image: 'https://i.postimg.cc/d0VMzYXv/tasks-list.jpg'
    },
    {
      title: t('projects.list.yogaLandingPage.title'),
      description: t('projects.list.yogaLandingPage.description'),
      linkGithub: 'https://github.com/zmngabriela/landing-page-',
      linkVercel: 'landing-page-yoga.vercel.app',
      image: 'https://i.postimg.cc/262QqFWL/landing-page2.jpg'
    },
    {
      title: t('projects.list.bmiCalculator.title'),
      description: t('projects.list.bmiCalculator.description'),
      linkGithub: 'https://github.com/zmngabriela/bmi-calculator',
      linkVercel: 'https://bmi-calculator-rust-eight.vercel.app/',
      image: 'https://i.postimg.cc/DzB3dCjZ/bmi-calculator.jpg'
    }
  ]);

  return (
    <section>
      <Title fontSize={16}>{t('projects.title')}</Title>
      <S.Projects>
        {projectsList.map((project) => (
          <li key={project.title}>
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
