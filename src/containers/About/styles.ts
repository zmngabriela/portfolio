import styled from 'styled-components';

export const GithubSection = styled.div`
  margin: 32px auto 64px;
  display: flex;
  gap: 10px;
  align-items: center;

  .github-images {
    height: auto;
    margin: 0;
    padding: 0;
  }

  .github-images:nth-of-type(1) {
    width: calc(57% - 5px);
  }

  .github-images:nth-of-type(2) {
    width: calc(43% - 5px);
  }

  @media (max-width: 768px) {
    .github-images:nth-of-type(1) {
      width: calc(60% - 5px);
    }

    .github-images:nth-of-type(2) {
      width: calc(40% - 5px);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .github-images:nth-of-type(1) {
      width: 100%;
    }

    .github-images:nth-of-type(2) {
      width: 100%;
    }
  }
`;
