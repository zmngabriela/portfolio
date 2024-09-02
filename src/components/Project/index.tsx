import Title from '../Title';
import Paragraph from '../Paragraph';

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
  description,
  linkGithub,
  linkVercel,
  image
}: ProjectType) => {
  return (
    <S.Card>
      <Title fontSize={16}>{title}</Title>
      <a href={linkVercel} target="_blank" rel="noreferrer">
        <img src={image} alt="Vercel" />
      </a>
      <Paragraph type="secondary">{description}</Paragraph>
      <S.LinkBtn href={linkGithub} target="_blank" rel="noreferrer">
        Github
      </S.LinkBtn>
      <S.LinkBtn href={linkVercel} target="_blank" rel="noreferrer">
        Vercel
      </S.LinkBtn>
    </S.Card>
  );
};

export default Project;
