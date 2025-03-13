import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const [isClosing, setIsClosing] = useState(false);

  const handleToggleDescription = () => {
    if (isVisible) {
      setIsClosing(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <S.Card ref={projectRef}>
      <S.Container
        style={{ position: 'relative' }}
        onMouseLeave={() => setIsVisible(false)}
      >
        <S.Info>
          <h2>{title}</h2>
          <S.LinkGithub href={linkGithub} target="_blank" rel="noreferrer">
            {t('projects.github')}
          </S.LinkGithub>
        </S.Info>
        <S.Image>
          <img src={image} alt="Preview" className="preview" />
          <S.Links className="links">
            <a href={linkVercel} target="_blank" rel="noreferrer">
              Preview
            </a>
            <button type="button" onClick={handleToggleDescription}>
              {isVisible ? 'X' : `${t('projects.description')}`}
            </button>
          </S.Links>
          {isVisible && (
            <S.Description isClosing={isClosing}>
              <p>{description}</p>
            </S.Description>
          )}
        </S.Image>
      </S.Container>
    </S.Card>
  );
};

export default Project;
