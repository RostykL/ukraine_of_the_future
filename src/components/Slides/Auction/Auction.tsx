import * as S from "./styles";
import EventDate from "components/EventDate";

import Unbroken from "assets/unbroken.png";
import HighlightText from "components/HighlightText";
import CommonLayout from "components/Layout/CommonLayout/CommonLayout";
import Circles from "components/Circles";
import { ANCHORS } from "shared/ANCHORS";

const PEOPLE_LIST = [
  "ПІДПРИЄМЦІ",
  "ІНВЕСТОРИ",
  "ІТ-ФАХІВЦІ",
  "СТАРТАПЕРИ",
  "ТОП-МЕНЕДЖЕРИ",
  "ЛІДЕРИ ДУМОК",
];

const Auction = () => {
  return (
    <S.Wrapper id={ANCHORS.AUCTION}>
      <CommonLayout title="Про нашу соціальну місію. Кому підуть кошти з аукціону?">
        <S.DateWrapper>
          <S.Image src={Unbroken} />
          <EventDate />
        </S.DateWrapper>
        <S.Description>
          Національний реабілітаційний центр “Незламні“ (
          <HighlightText>“Unbroken”</HighlightText>) - це унікальне місце, де
          дорослі та діти, які постраждали від війни, отримують комплексну
          кваліфіковану медичну допомогу. Це реконструктивна хірургія, ортопедія
          і роботичне протезування. Постраждалим не лише встановлюють протези,
          тут їх виготовляють. Окрім того, у Центрі займаються фізичною,
          психологічною та психосоціальною реабілітацією постраждалих військових
          та цивільних.
        </S.Description>

        <S.ForumWillGatherWrapper>
          <S.ForumWillGatherTitle>ФОРУМ ОБ'ЄДНАЄ:</S.ForumWillGatherTitle>
          <S.ForumWillGatherDescription>
            Більше <HighlightText>1500</HighlightText> людей, з яких{" "}
            <HighlightText>57%</HighlightText> - власники і керівники бізнесу!
          </S.ForumWillGatherDescription>
          <S.ForumWillGatherPeopleList>
            {PEOPLE_LIST.map((name) => (
              <S.PeopleListItem>
                <S.ListItemColor />
                <S.ListItemTitle>{name}</S.ListItemTitle>
              </S.PeopleListItem>
            ))}
            <Circles styles={{ left: "-500px" }} />
          </S.ForumWillGatherPeopleList>
        </S.ForumWillGatherWrapper>
      </CommonLayout>
    </S.Wrapper>
  );
};

export default Auction;
