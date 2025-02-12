import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Card = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  transition: width 0.5s ease-in-out;

  &:hover {
    width: 1048px;

    img.arrow {
      opacity: 0.7;
    }

    p.description {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: ${breakpoints.tablet};

    &:hover {
      width: 792px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: ${breakpoints.mobile};

    &:hover {
      width: 449px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  &.center {
    align-items: center;
  }
`;

export const Info = styled.div`
  padding: 8px 0 8px 16px;

  h2 {
    font-family: 'costaline';
    font-size: 16px;
  }
`;

export const LinkGithub = styled.a`
  color: ${(props) => props.theme.colors.btn};
  font-family: 'brosta';
  text-transform: uppercase;
  font-size: 13px;
`;

export const Image = styled.div`
  position: relative;

  img.preview {
    width: 100%;
    display: block;

    user-drag: none;
    -webkit-user-drag: none;
    pointer-events: none;
    user-select: none;
  }
`;

export const LinkVercel = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;

  img.arrow {
    width: 18px;
    height: 18px;
    opacity: 0;
    transition: opacity ease 1s;
  }
`;

export const Description = styled.p`
  width: 100%;
  white-space: wrap;
  font-family: 'costaline';
  font-size: 13px;
  opacity: 0;
  transition: opacity ease 1s;
`;
