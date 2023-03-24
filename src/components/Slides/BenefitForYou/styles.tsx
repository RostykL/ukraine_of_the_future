import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Title = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 2.2em;
  font-weight: 500;
  gap: 6px;
  text-align: left;
  width: 100%;
`;

export const ListWrapper = styled.div`
  margin-top: 24px;
`;

export const ListTextWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const ListText = styled.div`
  color: white;
  font-size: 1.5em;
  line-height: 32px;
  font-weight: 500;

  &:first-letter {
    text-transform: capitalize;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Circle = styled.div`
  background: white;
  height: 10px;
  width: 10px;
  flex-shrink: 0;
`;
