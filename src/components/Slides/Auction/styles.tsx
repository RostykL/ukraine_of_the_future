import styled from "styled-components";
import { COLORS } from "shared/colors";
import {
  COMMON_TEXT_FONT_SIZE,
  COMMON_TITLE_FONT_SIZE,
} from "../../../shared/fontSize";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 32px 0;
  }

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const Image = styled.img`
  width: 400px;

  @media (max-width: 1250px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Description = styled.div`
  color: whitesmoke;
  ${COMMON_TEXT_FONT_SIZE.desktop}
  font-weight: 500;
  letter-spacing: 1px;
  margin: 24px 0;

  @media (max-width: 1250px) {
    font-size: 1em;
    line-height: 36px;
  }

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const ForumWillGatherWrapper = styled.div`
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const ForumWillGatherTitle = styled.div`
  ${COMMON_TITLE_FONT_SIZE.big}
  color: ${COLORS.orange};
  font-weight: 600;
  margin-bottom: 24px;
  text-transform: uppercase;

  @media (max-width: 800px) {
    ${COMMON_TITLE_FONT_SIZE.medium}
  }
`;

export const ForumWillGatherDescription = styled.div`
  color: white;
  ${COMMON_TEXT_FONT_SIZE.extra}
  font-weight: 500;

  @media (max-width: 800px) {
    margin-top: 24px;
    font-size: 1.4em;
  }
`;

export const ForumWillGatherPeopleList = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 24px;
`;

export const PeopleListItem = styled.div`
  display: flex;
`;

export const ListItemColor = styled.div`
  width: 10px;
  background: ${COLORS.orange};
  margin-right: 8px;
  border-radius: 99999px;
`;

export const ListItemTitle = styled.div`
  color: white;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2em;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;
