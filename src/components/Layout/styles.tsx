import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  overflow: hidden;

  @media (min-width: 2350px) {
    overflow: unset;
  }
`;

export const BackgroundImage = styled.img`
  width: 460px;
  position: absolute;
  opacity: 0.4;
  z-index: -2;
  bottom: 0;
  right: 144px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ChildrenWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
