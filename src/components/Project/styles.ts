import styled from 'styled-components';

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.border};

  img {
    width: 100%;
  }
`;

export const LinkBtn = styled.a`
  display: inline-block;
  padding: 8px;
  margin: 10px 10px 0 0;
  background-color: ${(props) => props.theme.btn};
  color: ${(props) => props.theme.background};
  border-radius: 5px;
  font-size: 14px;
  text-decoration: none;
`;
