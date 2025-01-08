import styled from 'styled-components';
import { breakpoints } from '../../styles/styles';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  overflow: hidden;
  margin: 180px 0;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: end;

    img {
      width: 200px;
      margin-bottom: -40px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;

    img {
      width: 100%;
      margin-bottom: 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  p,
  a {
    font-family: 'brosta';
    font-size: 14px;
    color: ${(props) => props.theme.colors.principal};

    span {
      font-family: 'costaline';
      font-size: 16px;
    }
  }
`;
