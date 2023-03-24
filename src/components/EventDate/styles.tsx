import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.a`
  align-items: center;
  display: flex;
  gap: 8px;
  text-decoration: none;
`;

export const Day = styled.div`
  color: ${COLORS.orange};
  font-size: 20em;
  line-height: 0.71em;
  font-weight: 600;
`;

export const TimeMonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
`;

export const Time = styled.div`
  color: white;
  font-size: 3em;
  font-weight: 500;
`;

export const Month = styled.div`
  color: white;
  font-size: 6em;
  font-weight: 500;
  text-transform: uppercase;
`;
