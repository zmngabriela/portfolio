import styled, { createGlobalStyle } from 'styled-components';

import brosta from './fonts/Brosta.ttf';
import costaline from './fonts/CostalineThinitalic.otf';

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '425px'
};

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body, select {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.principal};

    h3 {
      font-family: 'brosta';
      text-transform: uppercase;
      font-size: 32px;
      transition: font-size 1s ease;

      span {
        font-family: 'costaline';
      }

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 44px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        font-size: 32px;
      }
    }
  }

  @font-face {
    font-family: 'brosta';
    src: url(${brosta}) format('truetype');
  }

  @font-face {
    font-family: 'costaline';
    src: url(${costaline}) format('opentype');
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  gap: 56px;
`;
