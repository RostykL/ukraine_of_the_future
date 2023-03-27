import * as S from "./styles";
import Logo from "assets/svg/logo.svg";
import Mykola from "assets/people/Mykola.jpeg";
import Olesya from "assets/people/Olesya.jpeg";
import Christ from "assets/people/Buddy.jpeg";

import { ANCHORS } from "shared/ANCHORS";

const CONTACTS = [
  {
    photo: Olesya,
    title: "Координатор форуму:",
    fullName: "Олеся Пошивак",
    tel: "+380677225211",
  },
  {
    photo: Christ,
    title: "Координатор по роботі з партнерами заходу:",
    fullName: "Христина Русін",
    tel: "+380503177110",
  },
  {
    photo: Mykola,
    title: "Координатор з питань продажу квитків:",
    fullName: "Микола Юрашко",
    tel: "+380674405377",
  },
];

const Contacts = () => {
  return (
    <S.Wrapper id={ANCHORS.CONTACTS}>
      <S.Header>
        <S.Logo>
          <img src={Logo} alt="Ukraine of the future logo" />
        </S.Logo>
        <S.Contacts>Контакти</S.Contacts>
      </S.Header>

      <S.Content>
        <S.ContentList>
          {CONTACTS.map(({ photo, title, fullName, tel }) => {
            return (
              <S.ContactWrapper>
                <S.PhotoBlackOverlay />
                <S.ContactPhoto src={photo} />
                <S.ContactInformation>
                  <div className="title">{title}</div>
                  <div className="fullName">{fullName}</div>
                  <div className="tel">{tel}</div>
                </S.ContactInformation>
              </S.ContactWrapper>
            );
          })}
        </S.ContentList>
      </S.Content>
    </S.Wrapper>
  );
};

export default Contacts;
