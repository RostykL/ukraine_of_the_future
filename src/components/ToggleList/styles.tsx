import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
  padding-right: 20px;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  gap: 2em;
  justify-content: space-between;

  @media (max-width: 1250px) {
    gap: 1em;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: 600;
  text-align: right;
  text-transform: uppercase;

  @media (max-width: 1250px) {
    font-size: 1.2em;
  }
`;
