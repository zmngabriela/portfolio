import styled from 'styled-components';
import { Props } from '.';

export const Paragraph = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.type === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`;
