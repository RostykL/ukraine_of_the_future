import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-left: 20px;
`;

export const Logo = styled.img`
  width: 96px;
  height: 96px;
`;

export const Orange = styled.div`
  background: ${COLORS.orange};
  min-width: 50%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.div`
  font-size: 2em;
  color: whitesmoke;
  font-weight: 500;
  max-width: 540px;
  line-height: 48px;
`;
