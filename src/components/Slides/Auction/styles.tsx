import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  //height: 100vh;
  position: relative;
  z-index: 1;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 64px 0;
  gap: 64px;
`;

export const Image = styled.img`
  width: 400px;
`;

export const Description = styled.div`
  color: whitesmoke;
  font-size: 2em;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 1px;
`;

export const ForumWillGatherWrapper = styled.div`
  margin-top: 64px;
`;

export const ForumWillGatherTitle = styled.div`
  color: ${COLORS.orange};
  font-size: 3em;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ForumWillGatherDescription = styled.div`
  color: white;
  font-size: 2em;
  font-weight: 500;
  margin-top: 50px;
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
`;

export const ListItemTitle = styled.div`
  color: white;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2em;
`;

export const Circle = styled.div`
  background: white;
  border-radius: 100%;
  flex-shrink: 0;
  height: 64px;
  width: 64px;
`;
