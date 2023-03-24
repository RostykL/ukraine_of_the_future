import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  position: relative;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  background: ${COLORS.orange};
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 600;
  gap: 12px;
  left: 0;
  padding: 16px;
  position: absolute;
  text-transform: uppercase;
  top: 100%;
  width: max-content;
`;

export const DropdownMenuItem = styled.a`
  color: whitesmoke;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;
