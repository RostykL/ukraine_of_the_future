import * as S from "./styles";

import ToggleList from "components/ToggleList";
import EventDate from "components/EventDate";

import Emily from "assets/svg/emily-logo.svg";
import Unbroken from "assets/unbroken.png";
import PlaceImage from "assets/place_image.png";

import Kontramarka from "assets/svg/kontramarka-logo.svg";
import { KONTRAMARKA_URL } from "shared/constants";
import HighlightText from "components/HighlightText";
import { BackgroundImage } from "components/Layout/styles";
import Circles from "components/Circles";

import Robot from "assets/robot.png";
import { ANCHORS } from "../../../shared/ANCHORS";

const OPTIONS = [
  "Лекторій",
  "Виставка",
  "Арт - Зона",
  "Нетворкінг",
  "Відеопроект",
  "Панельні Дискусії",
  "Зона Відпочинку",
  "Дитяча Кімната",
  "Afterparty",
];

const Preview = () => {
  return (
    <S.Wrapper id={ANCHORS.ABOUT_EVENT}>
      <S.Headline>
        <S.PlaceImageWrapper>
          <S.PlaceImage src={PlaceImage} />
          <S.PlaceImageOverlay />
        </S.PlaceImageWrapper>
        <S.Left>
          <EventDate />
          <>
            <S.Title>ГОЛОВНА ПОДІЯ ПРО УКРАЇНУ</S.Title>
            <S.Description>
              Форум для людей, які вірять в Україну, розвивають успішні бізнеси,
              освоюють нові ніші, втілюють передові технологічні розробки,
              шукають і знаходять своє місце в УКРАЇНІ МАЙБУТНЬОГО. Форум
              інновацій – велична подія для кожного українця. На Форумі
              відбудеться аукціон цінних лотів,{" "}
              <HighlightText>
                виручені кошти будуть направлені на протезування людей, які
                через війну втратили кінцівки
              </HighlightText>
            </S.Description>
          </>
        </S.Left>
        <S.Right>
          <ToggleList togglePosition="right" options={OPTIONS} />
          <BackgroundImage src={Robot} alt="robot image" />
          <Circles />
        </S.Right>
      </S.Headline>

      <S.Bottom>
        <S.InformativeSection>
          <S.ImageLogo src={Emily} />
          <S.BuyTicketsWrapper>
            <S.BuyTicketsText>Купуй квитки</S.BuyTicketsText>
            <S.Kontramakra
              src={Kontramarka}
              onClick={() => window.open(KONTRAMARKA_URL, "_blank")}
            />
          </S.BuyTicketsWrapper>
          <S.ImageLogo src={Unbroken} />
        </S.InformativeSection>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default Preview;
