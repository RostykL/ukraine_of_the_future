import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  background: ${COLORS.orange};
  border-radius: 6px;
  left: 0;
  padding: 20px;
  position: absolute;
  top: 100%;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const NavigationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NavItem = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${COLORS.orange};
    cursor: pointer;
  }
`;
