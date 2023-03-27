import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  margin: 100px 0;
  padding: 0 20px;

  @media (max-width: 800px) {
    margin: 64px 0;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    max-width: 300px;

    @media (max-width: 800px) {
      width: 100%;
      max-width: 200px;
    }
  }
`;

export const Contacts = styled.div`
  color: ${COLORS.orange};
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Content = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: max-content;
`;

export const PhotoBlackOverlay = styled.div`
  height: 200px;
  position: absolute;
  width: 200px;
  background: black;
  opacity: 0.4;
  z-index: 1;
  border-radius: 100%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContactPhoto = styled.img`
  border-radius: 100%;
  height: 200px;
  object-fit: cover;
  width: 200px;
`;

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .title {
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    max-width: 300px;
  }

  .fullName {
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    max-width: 300px;
  }

  .tel {
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    max-width: 300px;
  }
`;
