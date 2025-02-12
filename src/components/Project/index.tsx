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

  return (
    <S.Card>
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
