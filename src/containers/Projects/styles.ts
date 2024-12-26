import styled from 'styled-components';

import { breakpoints } from '../../styles/styles';
import { Text } from '../../components/TextComponent/styles';

export const Section = styled.section`
  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: start;

    ${Text} {
      width: 100%;
      justify-content: start;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 160px 0;

  img {
    width: 40%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 40px;
    margin: 80px 0;

    img {
      width: 100%;
    }

    ${Text}:nth-of-type(2) {
      justify-content: end;
    }
  }
`;
