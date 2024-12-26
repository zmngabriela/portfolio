import * as S from './styles';

type Props = {
  position?: string;
  fullWidth?: boolean;
  count: string;
  content: JSX.Element;
};

const TextComponent = ({
  position = '',
  fullWidth = false,
  count,
  content
}: Props) => {
  return (
    <S.Text position={position} fullWidth={fullWidth}>
      <p>
        <span>{count}</span>
      </p>
      <p>{content}</p>
    </S.Text>
  );
};

export default TextComponent;
