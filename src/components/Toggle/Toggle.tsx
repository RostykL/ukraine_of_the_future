import * as S from "./styles";
import { useEffect, useState } from "react";

const Toggle = ({ text }: { text?: string }) => {
  const [toggle, setToggle] = useState(false);
  const animationDuration = 300; // 0.3 seconds in milliseconds

  useEffect(() => {
    if (toggle) {
      const timeoutId = setTimeout(() => {
        setToggle(false);
      }, animationDuration);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [toggle]);

  const onToggleClick = () => {
    setToggle(true);
  };

  return (
    <S.Wrapper onClick={onToggleClick}>
      <S.Text>{text || "On"}</S.Text>
      <S.Circle toggle={toggle} />
    </S.Wrapper>
  );
};

export default Toggle;
