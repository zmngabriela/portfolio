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
          'https://i.postimg.cc/6pBMkWXt/Screenshot-2025-02-12-at-13-58-22.png'
      },
      {
        id: 4,
        title: t('projects.list.calhasGaspar.title'),
        description: t('projects.list.calhasGaspar.description'),
        linkGithub: 'https://github.com/zmngabriela/landing-page',
        linkVercel: 'https://calhas-gaspar.vercel.app/',
        image:
          'https://i.postimg.cc/L5V250J7/Screenshot-2025-03-10-at-11-47-03.png'
      },
      {
        id: 6,
        title: t('projects.list.tasks.title'),
        description: t('projects.list.tasks.description'),
        linkGithub: 'https://github.com/zmngabriela/tasks',
        linkVercel: 'https://tasks-lyart.vercel.app/',
        image:
          'https://i.postimg.cc/L8vxRc9f/Screenshot-2025-02-12-at-17-28-53.png'
      },
      {
        id: 3,
        title: t('projects.list.portfolio.title'),
        description: t('projects.list.portfolio.description'),
        linkGithub: 'https://github.com/zmngabriela/portfolio',
        linkVercel: 'https://zmngabriela.vercel.app/',
        image:
          'https://i.postimg.cc/tCTGvfxr/Screenshot-2025-03-09-at-22-04-38.png'
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
