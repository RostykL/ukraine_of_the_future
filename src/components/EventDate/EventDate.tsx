import * as S from "./styles";
import { DAY, GOOGLE_CALENDAR_EVENT, MONTH, TIME } from "shared/constants";
import useAddToGoogleCalendar from "shared/hooks/useAddToGoogleCalendar";

const EventDate = () => {
  const generateGoogleCalendarURL = useAddToGoogleCalendar(
    GOOGLE_CALENDAR_EVENT
  );

  return (
    <S.Wrapper
      href={generateGoogleCalendarURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.Day>{DAY}</S.Day>
      <S.TimeMonthWrapper>
        <S.Time>{TIME}</S.Time>
        <S.Month>{MONTH}</S.Month>
      </S.TimeMonthWrapper>
    </S.Wrapper>
  );
};

export default EventDate;
