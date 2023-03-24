import * as S from "./styles";
import EventsLayout from "components/EventsLayout";
import { AFTER_PARTY } from "shared/topics/afterParty";
import { ANCHORS } from "../../../shared/ANCHORS";

const topics = Object.keys(AFTER_PARTY);

const AfterParty = () => {
  return (
    <S.Wrapper id={ANCHORS.AFTER_PARTY}>
      <EventsLayout
        title="AFTERPARTY"
        topics={topics}
        sections={AFTER_PARTY}
        sectionTitle="ВЕЧІРКА"
      />
    </S.Wrapper>
  );
};

export default AfterParty;
