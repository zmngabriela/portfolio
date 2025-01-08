import styled from 'styled-components';

type ContainerProps = {
  descriptionOpen?: boolean;
};

export const Card = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    img.more {
      opacity: 0.7;
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  img.more {
    content: url(${(props) => props.theme.icons.arrow});
    width: 16px;
    padding: 8px 0;
    transform: ${(props) =>
      props.descriptionOpen ? 'rotate(-90deg)' : 'rotate(90deg)'};
    opacity: 0;
    transition: transform 0.8s ease, opacity 0.8s ease;
  }

  &.center {
    align-items: center;
  }
`;

export const Info = styled.div`
  padding: 8px 0 8px 16px;

  h2 {
    font-family: 'guffie';
    font-size: 16px;
  }
`;

export const LinkGithub = styled.a`
  color: ${(props) => props.theme.colors.btn};
  font-family: 'neue ralewe';
  text-transform: uppercase;
  font-size: 12px;
`;

export const LinkVercel = styled.a`
  position: relative;
  display: inline-block;

  img.vercel {
    width: 100%;
    display: block;
  }

  img.arrow {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 12px;
    height: 12px;
    transform: rotate(-40deg);
    opacity: 0;
    transition: opacity ease 1s;
  }

  &:hover {
    img.arrow {
      opacity: 0.7;
    }
  }
`;

export const Description = styled.p`
  width: 100%;
  white-space: wrap;
  font-family: 'guffie';
  font-size: 15px;
`;
