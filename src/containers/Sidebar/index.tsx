import Title from '../../components/Title';
import Avatar from '../../components/Avatar';
import Paragraph from '../../components/Paragraph';
import * as S from './styles';

type Props = {
  changeTheme: () => void;
};

const Sidebar = (props: Props) => {
  return (
    <S.Container>
      <Avatar />
      <Title fontSize={20}>Gabriela Zimmermann</Title>
      <Paragraph type="secondary" fontSize={16}>
        zmngabriela
      </Paragraph>
      <S.Description type="principal" fontSize={12}>
        Front-end developer
      </S.Description>
      <S.Btn onClick={props.changeTheme}>Change theme</S.Btn>
    </S.Container>
  );
};

export default Sidebar;
