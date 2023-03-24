import styled from "styled-components";
import { getCircleSize } from "shared/utils";
import { COLORS } from "shared/colors";

export const Circles = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100%;
  right: 20%;
  z-index: -2;
`;

export const Circle = styled.div<{
  circleNumber: number;
  circleOpacity: number;
}>`
  background: ${({ circleOpacity }) => COLORS.slateGrayOpacity(circleOpacity)};
  border-radius: 100%;
  box-shadow: inset 0 0 500px rgba(0, 0, 0, 0.4);
  height: ${getCircleSize};
  position: absolute;
  width: ${getCircleSize};
`;
