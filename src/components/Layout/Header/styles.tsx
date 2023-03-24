import styled from "styled-components";
import { COLORS } from "../../../shared/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  width: 100%;
  padding: 20px;
`;

export const NavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 64px;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    max-width: 300px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Title = styled.div`
  color: whitesmoke;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 6px;
  align-items: center;
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
`;
