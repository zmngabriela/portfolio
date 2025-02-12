import styled from 'styled-components';

import { Text } from '../../components/TextComponent/styles';

import { breakpoints } from '../../styles/styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 24px;

  ${Text} {
    padding-left: 8px;
  }
`;

export const Skills = styled.div`
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

    img {
      width: 100%;
    }

    ${Text}:nth-of-type(2) {
      justify-content: end;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    ${Text}:nth-of-type(2) {
      justify-content: start;
    }
  }
`;
