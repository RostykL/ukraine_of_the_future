import styled from "styled-components";
import { COMMON_TEXT_FONT_SIZE } from "../../../shared/fontSize";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 20px;

  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

export const ToggleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  div {
    color: white;
    font-weight: 500;
    ${COMMON_TEXT_FONT_SIZE.desktop}
  }

  @media (max-width: 800px) {
    margin-top: 24px;
    padding: 0 20px;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 124px;
  margin-top: 64px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 32px;
    gap: 56px;
    margin-bottom: 32px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SocialImage = styled.img`
  height: 200px;
  object-fit: contain;
  width: 200px;
`;

export const SocialCode = styled.img`
  height: 200px;
  object-fit: contain;
  width: 200px;
`;
