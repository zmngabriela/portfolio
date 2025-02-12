import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.background};

  button,
  select {
    border: none;
    background: none;
    cursor: pointer;

    font-family: 'brosta';
    text-transform: uppercase;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    img {
      width: 12px;
      height: 12px;
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h1 {
    font-family: 'brosta';
    text-transform: uppercase;
  }

  h2 {
    font-family: 'brosta';

    span {
      font-family: 'costaline';
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    &.left {
      flex-direction: column;
      align-items: start;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  flex: 0.5;
  justify-content: space-between;

  li {
    font-family: 'brosta';
    text-transform: uppercase;

    a {
      color: ${(props) => props.theme.colors.principal};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }

  &.open {
    position: absolute;
    top: 100%;
    right: 57px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    align-items: end;
  }
`;

export const ToggleButton = styled.button`
  display: none;
  border: 1px solid red;

  img {
    content: url(${(props) => props.theme.icons.toggleButton});
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;

export const ThemeButton = styled.button`
  display: flex;

  img {
    content: url(${(props) => props.theme.icons.themeButton});
  }
`;
