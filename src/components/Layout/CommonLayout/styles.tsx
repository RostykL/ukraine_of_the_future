import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
`;

export const ChildrenWrapper = styled.div`
  padding: 20px;

  @media (max-width: 800px) {
    padding: 0;
  }
`;
