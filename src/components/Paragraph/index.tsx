import * as S from './styles';

export type Props = {
  children: string;
  type?: 'principal' | 'secondary';
  fontSize?: number;
};

const Paragraph = ({ children, type = 'principal', fontSize }: Props) => {
  return (
    <S.P type={type} fontSize={fontSize}>
      {children}
    </S.P>
  );
};

export default Paragraph;
