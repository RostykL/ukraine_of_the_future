import styled from "styled-components";
import {
  COMMON_TEXT_FONT_SIZE,
  COMMON_TITLE_FONT_SIZE,
} from "../../../shared/fontSize";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 64px;
  position: relative;

  @media (max-width: 1250px) {
    height: 100%;
    max-height: 100%;
  }

  @media (max-width: 1000px) {
    margin-top: 0;
  }
`;

export const Headline = styled.div`
  display: flex;
  gap: 32px;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  z-index: 1;

  @media (max-width: 1000px) {
    //gap: 64px;
    flex-direction: column;
  }
`;

export const PlaceImageWrapper = styled.div`
  border-radius: 16px;
  height: 500px;
  left: 50px;
  overflow: hidden;
  position: absolute;
  width: 750px;
  z-index: -1;

  @media (max-width: 1250px) {
    height: 400px;
    width: 600px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    left: 0;
    border-radius: 0;
  }
`;

export const PlaceImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

export const PlaceImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const Bottom = styled.div`
  width: 100%;
  margin-bottom: 32px;
  position: relative;
  z-index: 2;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 20px;
  height: 400px;
`;

export const Title = styled.div`
  color: whitesmoke;
  ${COMMON_TITLE_FONT_SIZE.medium};
  font-weight: 700;
  margin-top: 16px;
  text-transform: uppercase;
  z-index: 1;
`;

export const Description = styled.div`
  color: whitesmoke;
  font-weight: 600;
  letter-spacing: 0.7px;
  line-height: 24px;
  max-width: 700px;
  z-index: 1;

  @media (max-width: 1250px) {
    font-size: ${COMMON_TEXT_FONT_SIZE.tablet};
    max-width: 600px;
  }
`;

export const Right = styled.div`
  @media (max-width: 1250px) {
    padding-left: 20px;
  }
`;

export const InformativeSection = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 32px;
  width: 100%;
  margin-top: 100px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    margin-top: 0;
  }
`;

export const ImageLogo = styled.img`
  max-width: 250px;

  @media (max-width: 800px) {
    max-width: 150px;
  }
`;

export const BuyTicketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
`;

export const BuyTicketsText = styled.div`
  color: white;
  font-size: 1.9em;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Kontramakra = styled.img`
  max-width: 250px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    transition: 0.4s ease-in-out;
  }
`;
