import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Card = styled.div`
  width: ${breakpoints.tablet};
  display: flex;
  flex-direction: column;
  gap: 8px;

  transition: width 0.5s ease-in-out;

  &:hover {
    width: calc(${breakpoints.tablet} + 12px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(${breakpoints.mobile});

    &:hover {
      width: calc(${breakpoints.mobile} + 12px);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: calc(${breakpoints.mobile} - 160px);

    &:hover {
      width: calc(${breakpoints.mobile} - 120px);
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 8px 16px;

  h2 {
    font-family: 'costaline';
  }
`;

export const LinkGithub = styled.a`
  color: ${(props) => props.theme.colors.btn};
  font-family: 'brosta';
  text-transform: uppercase;
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
  top: 20px;
  right: 20px;

  img.arrow {
    width: 18px;
    height: 18px;
    transition: opacity ease 1s;
  }
`;

export const Description = styled.p`
  width: 100%;
  font-family: 'costaline';
  white-space: wrap;
  opacity: 1;
  transition: opacity ease 1.5s;
`;
