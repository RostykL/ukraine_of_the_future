import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: #83c740;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  gap: 6px;
  height: 35px;
  justify-content: space-between;
  min-width: 85px;
  padding: 6px 10px;
  position: relative;

  @media (max-width: 1250px) {
    min-width: 70px;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
  line-height: 15px;
  text-transform: uppercase;

  @media (max-width: 1250px) {
    font-size: 15px;
  }
`;

const shakeAnimation = keyframes`
    0% { transform: translateX(-10px); }
    50% { transform: translateX(0px); }
    100% { transform: translateX(0px); }
  `;

export const Circle = styled.div<{ toggle: boolean }>`
  background: white;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 6px;
  animation: ${({ toggle }) =>
    toggle
      ? css`
          ${shakeAnimation} 0.4s ease-in-out
        `
      : ""};
`;
