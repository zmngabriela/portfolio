import styled from 'styled-components';

export const GithubSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 30px auto;
  gap: 10px;

  #github-stats {
    width: calc(59% - 5px);
  }

  #github-lang {
    width: calc(41% - 5px);
  }

  @media (max-width: 480px) {
    flex-direction: column;

    #github-stats {
      width: 100%;
    }

    #github-lang {
      width: 100%;
    }
  }
`;
