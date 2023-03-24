import * as S from "components/Slides/Exhibition/styles";
import STEPAN_KUYBIDA from "assets/stepan_kuybida.png";
import HighlightText from "components/HighlightText";

export const EXHIBITIONS = {
  "для перемоги": [
    {
      description: "Лідер волонтерського руху з виготовлення бронежилетів.",
      title: () => <S.EventTitle>Львівський оборонний кластер</S.EventTitle>,
      photo: STEPAN_KUYBIDA,
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
      photo: STEPAN_KUYBIDA,
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
