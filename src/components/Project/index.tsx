import { useState } from 'react';
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
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <S.Card>
      <S.Container>
        <S.Info>
          <h2>{title}</h2>
          <S.LinkGithub href={linkGithub} target="_blank" rel="noreferrer">
            {t('projects.github')}
          </S.LinkGithub>
        </S.Info>
        <S.LinkVercel href={linkVercel} target="_blank" rel="noreferrer">
          <img src={image} alt="Vercel" className="vercel" />
          <img src={arrow} alt="" className="arrow" />
        </S.LinkVercel>
      </S.Container>
      <S.Container className="center" descriptionOpen={descriptionOpen}>
        <img
          src=""
          alt="More"
          className="more"
          onClick={() => setDescriptionOpen(!descriptionOpen)}
        />
        {descriptionOpen && <S.Description>{description}</S.Description>}
      </S.Container>
    </S.Card>
  );
};

export default Project;
