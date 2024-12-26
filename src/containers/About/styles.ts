import styled from 'styled-components';

import { Text } from '../../components/TextComponent/styles';
import { breakpoints } from '../../styles/styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    max-width: 350px;
  }
`;

export const Main = styled.div`
  margin: -40px 40px 40px;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 40px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  padding: 0 40px 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    padding: 0 0 40px;

    ${Text} {
      width: 100%;
      justify-content: start;

      &:nth-of-type(2) {
        justify-content: end;

        p {
          text-align: right;
          max-width: 300px;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    ${Text}:nth-of-type(2) {
      justify-content: start;

      p {
        text-align: start;
        max-width: none;
      }
    }
  }
`;

export const Images = styled.div`
  width: 70%;
  margin-top: 40px;
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
  gap: 2px;

  img {
    width: 100%;
    transform: translateX(-42px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      transform: translateX(-24px);
    }
  }
`;
