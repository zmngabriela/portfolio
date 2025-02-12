import styled from 'styled-components';

export const Projects = styled.ul`
  display: flex;
  gap: 8px;
  align-items: top;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  cursor: grab;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
