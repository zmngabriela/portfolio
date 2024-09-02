import styled from 'styled-components';

export const Projects = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
