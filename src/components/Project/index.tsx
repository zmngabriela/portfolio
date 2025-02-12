import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import arrow from '../../assets/icons/arrow.png';

import * as S from './styles';

export type ProjectType = {
  id?: number;
  title: string;
  description: string;
  linkGithub: string;
  linkVercel: string;
  image: string;
};

const Project = ({
  title,
  linkGithub,
  linkVercel,
  image,
  description
}: ProjectType) => {
  const { t } = useTranslation();

  const projectRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 456) {
      const project = projectRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          });
        },
        { threshold: 0.6 }
      );

      if (project) {
        observer.observe(project);
      }

      console.log('teste', isVisible);

      return () => {
        if (project) {
          observer.unobserve(project);
        }
      };
    }
  }, []);

  return (
    <S.Card ref={projectRef} className={isVisible ? 'display' : ''}>
      <S.Container>
        <S.Info>
          <h2>{title}</h2>
          <S.LinkGithub href={linkGithub} target="_blank" rel="noreferrer">
            {t('projects.github')}
          </S.LinkGithub>
        </S.Info>
        <S.Image>
          <img src={image} alt="Preview" className="preview" />
          <S.LinkVercel href={linkVercel} target="_blank" rel="noreferrer">
            <img src={arrow} alt="" className="arrow" />
          </S.LinkVercel>
        </S.Image>
      </S.Container>
      <S.Container className="center">
        <S.Description className="description">{description}</S.Description>
      </S.Container>
    </S.Card>
  );
};

export default Project;
