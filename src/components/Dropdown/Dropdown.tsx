import * as S from "./styles";
import { ReactNode, useState } from "react";
import { ANCHORS } from "../../shared/ANCHORS";

interface DropdownProps {
  children: ReactNode;
}

const Dropdown = ({ children }: DropdownProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <S.Wrapper onMouseLeave={handleMouseLeave}>
      <S.Button onMouseEnter={handleMouseEnter}>{children}</S.Button>
      {hovered ? (
        <S.DropdownMenu>
          <S.DropdownMenuItem href={ANCHORS.AFTER_PARTY}>
            After Party
          </S.DropdownMenuItem>
          <S.DropdownMenuItem href={ANCHORS.INSPIRATION}>
            Мотивація
          </S.DropdownMenuItem>
          <S.DropdownMenuItem href={ANCHORS.BENEFITS}>Бонус</S.DropdownMenuItem>
          <S.DropdownMenuItem href={ANCHORS.JOIN}>Долучення</S.DropdownMenuItem>
        </S.DropdownMenu>
      ) : null}
    </S.Wrapper>
  );
};

export default Dropdown;
