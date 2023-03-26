import * as S from "./styles";
import { ANCHORS } from "shared/ANCHORS";

interface HamburgerMenuProps {
  isOpen: boolean;
}

export const RenderHamburgerIcon = ({ isOpen }: HamburgerMenuProps) => {
  if (!isOpen) {
    return (
      <svg
        width="40"
        height="100"
        viewBox="0 0 150 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="150" height="17" rx="7.5" fill="#EE7F1A" />
        <rect y="30" width="150" height="17" rx="7.5" fill="#EE7F1A" />
        <rect y="60" width="150" height="17" rx="7.5" fill="#EE7F1A" />
      </svg>
    );
  }

  return (
    <svg
      width="40"
      height="100"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.40918 3.38012C5.29197 1.51333 8.34457 1.51333 10.2274 3.38012L71.591 64.2223C73.4738 66.0891 73.4738 69.1157 71.591 70.9825V70.9825C69.7082 72.8493 66.6556 72.8493 64.7728 70.9825L3.40918 10.1404C1.52639 8.27357 1.52639 5.24691 3.40918 3.38012V3.38012Z"
        fill="#EE7F1A"
      />
      <path
        d="M3.40909 71.6199C1.5263 69.7531 1.5263 66.7264 3.40909 64.8596L64.7727 4.01745C66.6555 2.15066 69.7081 2.15066 71.5909 4.01745V4.01745C73.4737 5.88424 73.4737 8.9109 71.5909 10.7777L10.2273 71.6199C8.34448 73.4867 5.29188 73.4867 3.40909 71.6199V71.6199Z"
        fill="#EE7F1A"
      />
    </svg>
  );
};

const HamburgerMenu = ({ isOpen }: HamburgerMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.Wrapper>
      <S.NavigationList>
        <S.NavItem href={"#" + ANCHORS.ABOUT_EVENT}>Про подію</S.NavItem>
        <S.NavItem href={"#" + ANCHORS.AUCTION}>Аукціон</S.NavItem>
        <S.NavItem href={"#" + ANCHORS.LECTURE}>Лекторій</S.NavItem>
        <S.NavItem href={"#" + ANCHORS.EXHIBIT}>Експозиція</S.NavItem>
        <S.NavItem href={"#" + ANCHORS.EXHIBITION_AREA}>
          Виставкова зона
        </S.NavItem>
        <S.NavItem href={"#" + ANCHORS.AFTER_PARTY}>AfterParty</S.NavItem>
        <S.NavItem href={"#" + ANCHORS.VIDEO_PROJECT}>Відеопроект</S.NavItem>
        <S.NavItem href={"#" + ANCHORS.CONTACTS}>Контакти</S.NavItem>
        <S.NavItem href={"#" + ANCHORS.PARTNERS}>Партнери</S.NavItem>
      </S.NavigationList>
    </S.Wrapper>
  );
};

export default HamburgerMenu;
