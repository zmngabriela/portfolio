import styled from 'styled-components';
import { P } from '../../components/Paragraph/styles';

export const Description = styled(P)`
  margin-bottom: 40px;
`;

export const containerBtn = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
  }
`;

export const BtnTheme = styled.button`
  padding: 8px;
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.principal};
  cursor: pointer;
`;

export const BtnLang = styled.button`
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.principal};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Container = styled.aside`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    position: block;
    top: auto;
    left: auto;
    margin: 40px 0;
    text-align: center;
  }
`;
