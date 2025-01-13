import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Project, { ProjectType } from '../../components/Project';

import * as S from './styles';

const ProjectsList = () => {
  const { t, i18n } = useTranslation();
  const [projectsList, setProjectsList] = useState<ProjectType[]>([]);

  const scrollContainer = useRef<HTMLUListElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setProjectsList([
      {
        id: 1,
        title: t('projects.list.e-commerce.title'),
        description: t('projects.list.e-commerce.description'),
        linkGithub: 'https://github.com/zmngabriela/e-commerce',
        linkVercel: 'https://e-commerce-opal-seven-34.vercel.app/',
        image:
          'https://i.postimg.cc/C5YHD4yz/Screenshot-2024-12-23-at-21-33-32.png'
      },
      {
        id: 2,
        title: t('projects.list.contactList.title'),
        description: t('projects.list.contactList.description'),
        linkGithub: 'https://github.com/zmngabriela/contact-list',
        linkVercel: 'https://contact-list-orcin.vercel.app/',
        image:
          'https://i.postimg.cc/66msXngD/Screenshot-2025-01-09-at-18-53-48.png'
      },
      {
        id: 4,
        title: t('projects.list.renovationLandingPage.title'),
        description: t('projects.list.renovationLandingPage.description'),
        linkGithub: 'https://github.com/zmngabriela/landing-page',
        linkVercel: 'https://houserenovations.vercel.app/',
        image:
          'https://i.postimg.cc/T3hjrwsq/Screenshot-2024-12-23-at-21-34-10.png'
      },
      {
        id: 5,
        title: t('projects.list.toDoList.title'),
        description: t('projects.list.toDoList.description'),
        linkGithub: 'https://github.com/zmngabriela/todolist',
        linkVercel: 'https://todozmn.vercel.app/',
        image:
          'https://i.postimg.cc/RhR1Tn9G/Screenshot-2024-12-23-at-21-34-24.png'
      },
      {
        id: 6,
        title: t('projects.list.tasks.title'),
        description: t('projects.list.tasks.description'),
        linkGithub: 'https://github.com/zmngabriela/tasks',
        linkVercel: 'https://tasks-lyart.vercel.app/',
        image:
          'https://i.postimg.cc/kXJvgwFH/Screenshot-2024-12-23-at-21-34-42.png'
      },
      {
        id: 7,
        title: t('projects.list.yogaLandingPage.title'),
        description: t('projects.list.yogaLandingPage.description'),
        linkGithub: 'https://github.com/zmngabriela/landing-page-',
        linkVercel: 'https://landing-page-yoga.vercel.app',
        image:
          'https://i.postimg.cc/g25V4pF9/Screenshot-2024-12-23-at-21-35-10.png'
      },
      {
        id: 3,
        title: t('projects.list.portfolio.title'),
        description: t('projects.list.portfolio.description'),
        linkGithub: 'https://github.com/zmngabriela/portfolio',
        linkVercel: 'https://zmngabriela.vercel.app/',
        image:
          'https://i.postimg.cc/sDT9QSTg/Screenshot-2024-12-23-at-21-35-50.png'
      }
    ]);
  }, [i18n.language, t]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainer.current;
    if (!container) return;

    setIsDown(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (scrollContainer.current) {
      scrollContainer.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (scrollContainer.current) {
      scrollContainer.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollContainer.current;
    if (!isDown || !container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do scroll
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <section>
      <S.Projects
        ref={scrollContainer}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
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

export default ProjectsList;
