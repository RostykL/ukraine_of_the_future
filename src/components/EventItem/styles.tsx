import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
  width: 700px;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const PhotoWrapper = styled.div`
  height: 200px;
  width: 200px;

  @media (max-width: 650px) {
    border-radius: 0;
    height: 100%;
    max-height: 350px;
    width: 100%;
  }
`;

export const PhotoBlackOverlay = styled.div`
  height: 200px;
  position: absolute;
  width: 200px;
  background: black;
  opacity: 0.4;
  z-index: 1;
  border-radius: 100%;
`;

export const Photo = styled.img`
  border-radius: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  height: 100%;
  object-fit: cover;
  object-position: top;
  width: 200px;
`;

export const InformationWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  gap: 8px;
  text-align: left;
  font-weight: 500;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.3em;
`;

export const Description = styled.div`
  line-height: 30px;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const SubDescription = styled.div`
  color: ${COLORS.orange};
  font-weight: 600;
  font-style: italic;
`;
