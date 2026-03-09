import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Text = styled.div`
  display: flex;
  gap: 8px;

  p {
    font-family: 'costaline';

    span {
      font-family: 'brosta';
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    justify-content: auto;
  }
`;
