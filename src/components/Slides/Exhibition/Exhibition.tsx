import * as S from "./styles";
import EventsLayout from "components/EventsLayout";
import { EXHIBITIONS } from "shared/topics/exibition";
import { ANCHORS } from "shared/ANCHORS";

const topics = Object.keys(EXHIBITIONS);

const Exhibition = () => {
  return (
    <S.Wrapper id={ANCHORS.EXHIBIT}>
      <EventsLayout
        title="Експозиція"
        topics={topics}
        sections={EXHIBITIONS}
        sectionTitle="Волонтерські ініціативи"
      />
    </S.Wrapper>
  );
};

export default Exhibition;
