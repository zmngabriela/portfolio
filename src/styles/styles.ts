import styled, { createGlobalStyle, css } from 'styled-components';

import neueRalewe from './fonts/ZTNeueRalewe-Regular.ttf';
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
      font-family: 'neue ralewe';
      text-transform: uppercase;
      line-height: 64px;
      font-size: 64px;
      transition: font-size 1s ease;

      span {
        font-family: 'costaline';
      }

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 44px;
        line-height: 52px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        font-size: 32px;
        line-height: 40px;
      }
    }
  }

  @font-face {
    font-family: 'neue ralewe';
    src: url(${neueRalewe}) format('truetype');
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
