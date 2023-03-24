import * as S from "./styles";
import Toggle from "../Toggle";
import { CSSProperties } from "styled-components";

interface ToggleListProps {
  listGap?: string;
  options: string[];
  textStyles?: CSSProperties;
  togglePosition: "left" | "right";
}

const isTogglePositionLeft = (togglePosition: "left" | "right") =>
  togglePosition === "left";

const ToggleList = ({
  listGap,
  options,
  textStyles,
  togglePosition,
}: ToggleListProps) => {
  const renderListItem = (text: string) => {
    if (isTogglePositionLeft(togglePosition)) {
      return (
        <S.Item>
          <Toggle />
          <S.Text style={textStyles}>{text}</S.Text>
        </S.Item>
      );
    }

    return (
      <S.Item>
        <S.Text style={textStyles}>{text}</S.Text>
        <Toggle />
      </S.Item>
    );
  };

  return (
    <S.Wrapper style={{ gap: listGap }}>
      {options.map((option) => renderListItem(option))}
    </S.Wrapper>
  );
};

export default ToggleList;
