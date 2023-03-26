import styled from "styled-components";
import { COLORS } from "shared/colors";
import { COMMON_TEXT_FONT_SIZE, COMMON_TITLE_FONT_SIZE } from "shared/fontSize";

export const Wrapper = styled.div`
  position: relative;

  @media (min-width: 2350px) {
    overflow: unset;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 1100px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  max-width: 800px;
  object-fit: cover;
  opacity: 0.7;
  width: 100%;

  @media (max-width: 1400px) {
    max-width: 500px;
  }

  @media (max-width: 800px) {
    position: relative;
    margin-top: 25px;
    height: 200px;
  }

  @media (max-width: 1100px) {
    max-width: 100%;
    height: 300px;
  }
`;

export const Text = styled.div`
  color: white;
  ${COMMON_TEXT_FONT_SIZE.desktop}
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 40px;
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    ${COMMON_TEXT_FONT_SIZE.tablet}
    margin-top: 16px;
    padding: 0 20px;
  }

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const VideoProjectWrapper = styled.div`
  display: flex;
  gap: 24px;
  position: relative;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }
`;

export const VideoProjectInspiration = styled.div`
  color: ${COLORS.orange};
  ${COMMON_TITLE_FONT_SIZE.medium}
  font-weight: 600;
  letter-spacing: 1px;
  margin: 24px 0 16px;

  @media (max-width: 800px) {
    font-size: 1.5em;
    margin-top: 16px;
  }
`;

export const VideoProjectDescription = styled.div`
  color: white;
  ${COMMON_TEXT_FONT_SIZE.desktop}
  font-weight: 500;
  letter-spacing: 0.5px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    margin-bottom: 8px;
  }

  .list {
    line-height: 40px;
    list-style: none;

    .listItem {
      align-items: baseline;
      display: flex;
      gap: 6px;

      .textHighlight {
        font-weight: 600;
      }
    }
  }

  .welcomeInvitation {
    color: ${COLORS.orange};
    font-weight: 600;
    margin-top: 8px;
    font-size: 1.2em;
  }

  @media (max-width: 800px) {
    padding: 0 20px;
    font-size: 1em;
    margin-top: 16px;
  }

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const Circle = styled.div`
  background: white;
  border-radius: 100%;
  flex-shrink: 0;
  height: 10px;
  width: 10px;
`;
