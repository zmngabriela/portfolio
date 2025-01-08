import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Text = styled.div`
  display: flex;
  gap: 8px;

  p {
    font-family: 'guffie';
    font-style: italic;
    font-size: 15px;

    span {
      font-family: 'neue ralewe';
      font-size: 16px;
    }

    &:nth-of-type(2) {
      margin-top: 4px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    justify-content: auto;
  }
`;
