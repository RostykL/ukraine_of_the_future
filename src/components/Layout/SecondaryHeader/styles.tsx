import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-left: 20px;
  margin-top: 64px;
`;

export const Logo = styled.img`
  width: 96px;
  height: 96px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Orange = styled.div`
  background: ${COLORS.orange};
  min-width: 50%;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 800px) {
    justify-content: flex-start;
    min-width: 100%;
    text-align: left;
  }
`;

export const Text = styled.div`
  font-size: 2em;
  color: whitesmoke;
  font-weight: 500;
  max-width: 540px;
  line-height: 48px;

  @media (max-width: 1250px) {
    max-width: 380px;
    font-size: 1.4em;
    line-height: 36px;
  }
`;
