import * as S from "./styles";
import EventsLayout from "components/EventsLayout";
import { EXHIBITION_ZONE } from "shared/topics/exibitionZone";
import { ANCHORS } from "../../../shared/ANCHORS";

const topics = Object.keys(EXHIBITION_ZONE);

const ExhibitionZone = () => {
  return (
    <S.Wrapper id={ANCHORS.EXHIBITION_AREA}>
      <EventsLayout
        title="Виставкова зона"
        topics={topics}
        sections={EXHIBITION_ZONE}
        sectionTitle="Арт зона"
      />
    </S.Wrapper>
  );
};

export default ExhibitionZone;
