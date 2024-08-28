import * as S from './styles';

export type Props = {
  children: string;
  fontSize: number;
};

const Title = ({ children, fontSize }: Props) => {
  return <S.Title fontSize={fontSize}>{children}</S.Title>;
};

export default Title;

// Explanation: Dynamic Children Value
// We want to use the value placed inside the <title> tag in the sidebar (which is a child element of this component that helps form the sidebar). In this case, we cannot use just any property name for the props; we specifically need to use the name children (which refers to the child element).

// Here's a breakdown:

// The component is created here, but it is used within the SidebarContainer (which is a composition of components).
// In this scenario, the parent component passes a value inside the <title> tag, and this value will be displayed inside a <span> in the child component (the sidebar).
// The connection is made using props, which allows the value to be dynamic.
// This means that depending on which container uses the <title>, the sidebar will display a different value for each page, making it dynamic and flexible.
