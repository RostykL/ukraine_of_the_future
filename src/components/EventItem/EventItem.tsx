import * as S from "./styles";

export interface EventItemProps {
  description?: (() => JSX.Element) | string;
  photo: string;
  subDescription?: (() => JSX.Element) | string | null;
  title?: (() => JSX.Element) | string | null;
}

const renderElement = (element: (() => JSX.Element) | string) => {
  if (typeof element === "string") {
    return element;
  }

  return element();
};

const EventItem = ({
  description,
  photo,
  subDescription,
  title,
}: EventItemProps) => {
  return (
    <S.Wrapper>
      <S.Photo src={photo} />
      <S.InformationWrapper>
        {title ? <S.Title>{renderElement(title)}</S.Title> : null}
        {description ? (
          <S.Description>{renderElement(description)}</S.Description>
        ) : null}
        {subDescription ? (
          <S.SubDescription>{renderElement(subDescription)}</S.SubDescription>
        ) : null}
      </S.InformationWrapper>
    </S.Wrapper>
  );
};

export default EventItem;
