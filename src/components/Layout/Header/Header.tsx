import * as S from "./styles";

import Logo from "assets/svg/logo.svg";
import Dropdown from "components/Dropdown";
import { ANCHORS } from "shared/ANCHORS";

const Header = () => {
  return (
    <S.Wrapper>
      <S.NavigationWrapper>
        <S.Logo>
          <img src={Logo} alt="Ukraine of the future logo" />
        </S.Logo>
        <S.Navigation>
          <S.NavItem href={"#" + ANCHORS.ABOUT_EVENT}>Про подію</S.NavItem>
          <S.NavItem href={"#" + ANCHORS.AUCTION}>Аукціон|Unbroken</S.NavItem>
          <S.NavItem href={"#" + ANCHORS.LECTURE}>Лекторій</S.NavItem>
          <S.NavItem href={"#" + ANCHORS.EXHIBIT}>Експозиція</S.NavItem>
          <S.NavItem href={"#" + ANCHORS.EXHIBITION_AREA}>
            Виставкова зона
          </S.NavItem>
          <S.NavItem href={"#" + ANCHORS.AFTER_PARTY}>AfterParty</S.NavItem>
          <S.NavItem href={"#" + ANCHORS.VIDEO_PROJECT}>Відеопроект</S.NavItem>
          <S.NavItem href={"#" + ANCHORS.CONTACTS}>Контакти</S.NavItem>
          <S.NavItem href={"#" + ANCHORS.PARTNERS}>Партнери</S.NavItem>
        </S.Navigation>
      </S.NavigationWrapper>
      <S.Title>Форум інновацій та можливостей</S.Title>
    </S.Wrapper>
  );
};

export default Header;
