import * as S from "./styles";
import { CSSProperties } from "styled-components";

const CIRCLES = [0.1, 0.2, 0.3, 0.4];

const Circles = ({ styles }: { styles?: CSSProperties }) => {
  return (
    <S.Circles style={styles}>
      {CIRCLES.map((circleOpacity, index) => (
        <S.Circle circleNumber={index + 1} circleOpacity={circleOpacity} />
      ))}
    </S.Circles>
  );
};

export default Circles;
