import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 64px 0;
  gap: 64px;

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
  font-size: 2em;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 1px;

  @media (max-width: 1250px) {
    font-size: 1em;
    line-height: 36px;
  }

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const ForumWillGatherWrapper = styled.div`
  margin-top: 64px;

  @media (max-width: 800px) {
    margin-top: 32px;
    padding: 20px;
  }
`;

export const ForumWillGatherTitle = styled.div`
  color: ${COLORS.orange};
  font-size: 3em;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 800px) {
    font-size: 2em;
  }
`;

export const ForumWillGatherDescription = styled.div`
  color: white;
  font-size: 2em;
  font-weight: 500;
  margin-top: 50px;

  @media (max-width: 800px) {
    margin-top: 24px;
    font-size: 1.4em;
  }
`;

export const ForumWillGatherPeopleList = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  flex-wrap: wrap;
`;

export const PeopleListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.green};
  border-radius: 9999px;
  padding: 10px;
  max-width: 450px;
  width: 100%;

  @media (max-width: 600px) {
    max-width: 300px;
  }
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

export const Circle = styled.div`
  background: white;
  border-radius: 100%;
  flex-shrink: 0;
  height: 64px;
  width: 64px;

  @media (max-width: 600px) {
    height: 48px;
    width: 48px;
  }
`;
