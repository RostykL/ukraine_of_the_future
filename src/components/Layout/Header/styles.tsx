import styled from "styled-components";
import { COLORS } from "shared/colors";
import { ANCHORS } from "shared/ANCHORS";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  width: 100%;
  padding: 20px;

  @media (max-width: 1000px) {
    padding-top: 0;
  }
  z-index: 3;
`;

export const NavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 64px;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 2;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1000px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  img {
    max-width: 300px;

    @media (max-width: 1100px) {
      max-width: 200px;
      width: 100%;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: block;
    width: 100%;
    text-align: right;
  }
`;

export const Title = styled.div`
  color: whitesmoke;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 6px;
  align-items: center;

  @media (max-width: 1000px) {
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    gap: 32px;
    padding-bottom: 32px;
    background: black;
    z-index: 999999;

    &:nth-child(2) {
      display: none;
    }
  }
`;

export const NavItem = styled.a`
  color: whitesmoke;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${COLORS.orange};
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    &[href="${"#" + ANCHORS.EXHIBITION_AREA}"],
    &[href="${"#" + ANCHORS.EXHIBIT}"] {
      display: none;
    }
  }
`;
