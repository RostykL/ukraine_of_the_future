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
  font-size: 10em;
  line-height: 0.71em;
  font-weight: 600;

  @media (max-width: 1250px) {
    font-size: 10em;
  }

  @media (max-width: 600px) {
    font-size: 5em;
  }
`;

export const TimeMonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
`;

export const Time = styled.div`
  color: white;
  font-size: 2em;
  font-weight: 500;

  @media (max-width: 1250px) {
    font-size: 1.5em;
  }

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

export const Month = styled.div`
  color: white;
  font-size: 4em;
  font-weight: 500;
  text-transform: uppercase;

  @media (max-width: 1250px) {
    font-size: 3em;
  }

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;
