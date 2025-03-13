import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../../styles/styles';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const Card = styled.div`
  width: ${breakpoints.tablet};
  display: flex;
  flex-direction: column;
  gap: 8px;

  transition: width 0.5s ease-in-out;

  &:hover {
    width: calc(${breakpoints.tablet} + 12px);

    .links {
      opacity: 1;
    }
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

export const Links = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 40px;

  a,
  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.btn};
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
  }

  &.links {
    flex-direction: column;
    opacity: 0;
    transition: opacity ease-in-out 1s;
    mix-blend-mode: difference;
    z-index: 2;

    p,
    button {
      font-family: 'brosta';
    }
  }
`;
export const Description = styled(Links)<{ isClosing?: boolean }>`
  background-color: ${(props) => props.theme.colors.background};
  text-wrap: wrap;
  z-index: 1;

  animation: ${({ isClosing }) => (isClosing ? slideDown : slideUp)} 500ms
    ease-in-out;

  p {
    font-family: 'costaline';
    max-width: 50%;
  }
`;
