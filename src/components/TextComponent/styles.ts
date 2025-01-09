import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Text = styled.div`
  display: flex;
  gap: 8px;

  p {
    font-family: 'costaline';
    font-style: italic;
    font-size: 13px;

    span {
      font-family: 'brosta';
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
