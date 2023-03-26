import styled from "styled-components";
import {
  COMMON_TEXT_FONT_SIZE,
  COMMON_TITLE_FONT_SIZE,
} from "../../../shared/fontSize";

export const Wrapper = styled.div`
  height: 100%;
  margin-top: 64px;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

export const Title = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  ${COMMON_TITLE_FONT_SIZE.medium}
  font-weight: 500;
  gap: 6px;
  text-align: left;
  width: 100%;

  @media (max-width: 800px) {
    margin-top: 24px;
    padding: 0 20px;
  }
`;

export const ListWrapper = styled.div`
  margin: 24px 0;
`;

export const ListTextWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;

  @media (max-width: 800px) {
    padding: 0 20px;
    font-size: 0.8em;
  }
`;

export const ListText = styled.div`
  color: white;
  ${COMMON_TEXT_FONT_SIZE.desktop}
  line-height: 32px;
  font-weight: 500;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Circle = styled.div`
  background: white;
  height: 10px;
  width: 10px;
  flex-shrink: 0;
`;
