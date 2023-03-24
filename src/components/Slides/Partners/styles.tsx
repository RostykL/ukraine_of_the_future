import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  background: ${COLORS.green};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  font-weight: 600;
  padding: 16px 0;
  text-align: center;
  text-transform: uppercase;
`;

export const Partners = styled.div`
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  padding: 0 20px;

  img {
    flex-shrink: 0;
    object-fit: cover;
    width: 200px;
  }
`;
