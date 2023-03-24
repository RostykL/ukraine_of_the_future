import * as S from "./styles";

import Logo from "assets/logo.png";

interface SecondaryHeaderProps {
  text: string;
}

const SecondaryHeader = ({ text }: SecondaryHeaderProps) => {
  return (
    <S.Wrapper>
      <S.Logo src={Logo} />
      <S.Orange>
        <S.Text>{text}</S.Text>
      </S.Orange>
    </S.Wrapper>
  );
};

export default SecondaryHeader;
