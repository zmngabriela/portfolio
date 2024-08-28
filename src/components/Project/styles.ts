import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.border};
  padding: 16px;
  border-radius: 8px;

  img {
    width: 100%;
  }
`;

export const LinkBtn = styled.a`
  background-color: ${(props) => props.theme.btn};
  color: ${(props) => props.theme.background};
  border-radius: 5px;
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin: 24px 10px 0 0;
`;
