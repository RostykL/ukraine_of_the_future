import * as S from "./styles";
import SecondaryHeader from "components/Layout/SecondaryHeader";
import { ReactNode } from "react";

interface CommonLayoutProps {
  children: ReactNode;
  title: string;
}

const CommonLayout = ({ children, title }: CommonLayoutProps) => {
  return (
    <S.Wrapper>
      <SecondaryHeader text={title} />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.Wrapper>
  );
};

export default CommonLayout;
