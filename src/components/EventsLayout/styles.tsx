import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 2;
`;

export const TopicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 32px;
  &:not(:first-of-type) {
    margin-top: 40px;
  }
`;

export const TopicHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
`;

export const TopicTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .line {
    width: 100%;
    height: 2px;
    border-radius: 9999px;
    background: ${COLORS.orange};
  }
`;

export const HeaderTopTitle = styled.div`
  color: white;
  font-size: 2em;
  font-weight: 500;
`;

export const TopicTitle = styled.div`
  background: ${COLORS.orange};
  color: white;
  flex-shrink: 0;
  font-weight: 600;
  padding: 12px;
  text-align: left;
  text-transform: uppercase;
`;

export const TopicsList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;