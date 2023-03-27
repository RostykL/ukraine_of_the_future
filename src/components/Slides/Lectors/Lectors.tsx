import * as S from "./styles";
import { LECTURERS } from "shared/topics/lecturers";
import EventsLayout from "components/EventsLayout";
import { ANCHORS } from "shared/ANCHORS";

const LECTURER_TOPICS = Object.keys(LECTURERS);

export const Lectors = () => {
  return (
    <S.Wrapper id={ANCHORS.LECTURE}>
      <EventsLayout
        title="Лекторій"
        topics={LECTURER_TOPICS}
        sections={LECTURERS}
        sectionTitle="Лекторій"
      />
    </S.Wrapper>
  );
};

export default Lectors;
