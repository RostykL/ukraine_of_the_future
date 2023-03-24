import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ToggleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  div {
    color: white;
    font-weight: 500;
    font-size: 1.5em;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 124px;
  margin-top: 64px;
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
