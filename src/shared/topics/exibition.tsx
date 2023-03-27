import * as S from "components/Slides/Exhibition/styles";
import LvivDefenceCluster from "assets/people/LvivDefenceCluster.png";
import Unbroken from "assets/unbroken.png";
import HighlightText from "components/HighlightText";
import styled from "styled-components";

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  max-width: 200px;
  max-height: 200px;
  flex-shrink: 0;
  object-fit: contain;
  object-position: center;

  @media (max-width: 650px) {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`;

export const EXHIBITIONS = {
  "для перемоги": [
    {
      description: "Лідер волонтерського руху з виготовлення бронежилетів.",
      title: () => <S.EventTitle>Львівський оборонний кластер</S.EventTitle>,
      photo: LvivDefenceCluster,
      subDescription: () => (
        <S.EventSubDescription>
          Команда однодумців, що розробляє передові технологічні засоби для
          військових представить свої напрацювання"
        </S.EventSubDescription>
      ),
    },
    {
      description:
        "Гості Форуму зможуть придбати цінні експонати та арт-об’єкти.",
      title: () => <S.EventTitle>Благодійний аукціон</S.EventTitle>,
      photo: () => <Photo src={Unbroken} />,
      subDescription: () => (
        <S.EventSubDescription>
          Виручені кошти направимо до реабілітаційного центру “
          <HighlightText>Unbroken</HighlightText>” - на виготовлення протезів
          для людей, що втратили кінцівки
        </S.EventSubDescription>
      ),
    },
  ],
};
