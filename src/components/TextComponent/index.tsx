import * as S from './styles';

type Props = {
  count: string;
  content: JSX.Element;
};

const TextComponent = ({ count, content }: Props) => {
  return (
    <S.Text>
      <p>
        <span>{count}</span>
      </p>
      <p>{content}</p>
    </S.Text>
  );
};

export default TextComponent;
