import styled from 'styled-components';

import { Text } from '../../components/TextComponent/styles';
import { breakpoints } from '../../styles/styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  align-items: center;
  gap: 40px;
  margin: 40px 0;

  p {
    max-width: 30vw;
  }

  > div {
    ${Text}:nth-of-type(1) {
      margin-bottom: 8px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;

    p {
      max-width: 80%;
    }

    ${Text} {
      justify-content: center;
    }

    > div {
      ${Text}:nth-of-type(1) {
        margin-bottom: 40px;
      }
    }
  }
`;

export const Images = styled.div`
  width: 50%;
  margin-top: 40px;
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
  gap: 2px;

  img {
    width: 100%;
  }
`;
