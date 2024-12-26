import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

type TextProps = {
  position: string;
  fullWidth: boolean;
};

export const Text = styled.div<TextProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  display: flex;
  justify-content: ${(props) => (props.position === 'right' ? 'end' : 'auto')};
  gap: 8px;
  padding: ${(props) => (props.position === 'right' ? '0 20% 0 0' : '0')};

  p {
    font-family: 'costaline';
    font-style: italic;
    font-size: 12px;

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
