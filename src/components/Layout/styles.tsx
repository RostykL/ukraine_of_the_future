import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
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
  bottom: -60px;
  right: 144px;
`;

export const ChildrenWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
