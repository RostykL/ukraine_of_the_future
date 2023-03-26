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

export const Photo = styled.img`
  border-radius: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  max-width: 300px;

  @media (max-width: 650px) {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`;

export const InformationWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  gap: 8px;
  text-align: left;
  font-weight: 500;
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
