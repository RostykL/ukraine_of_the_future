import styled from "styled-components";
import { COLORS } from "shared/colors";

export const Wrapper = styled.div`
  margin-top: 100px;
  padding: 0 20px;
  height: 100vh;
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

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Contacts = styled.div`
  color: ${COLORS.green};
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
