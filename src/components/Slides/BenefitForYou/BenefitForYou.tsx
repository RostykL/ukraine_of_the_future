import * as S from "./styles";
import CommonLayout from "components/Layout/CommonLayout";
import HighlightText from "components/HighlightText";

const OPTIONS = [
  "можливість стати частиною великого  проекту, який допоможе мільйонам українців з гордістю дивитися у майбутнє",
  "потужний заряд енергії, натхнення, свободу та мотивацію для реалізації ваших бізнес-ідей",
  "інноваційні ідеї для реалізації ваших проектів",
  "ексклюзивні знання про впровадження інноваційних технологій у систему вашого бізнесу",
  "інформацію від експертів про переваги використання нових технологій",
  "максимум практики та особисте спілкування зі світовими спікерами",
  "продуктивний нетворкінг: 2 000 потенційних партнерів та клієнтів",
  "якісно проведете час в красивій локації з перспективними людьми",
];

const BenefitForYou = () => {
  return (
    <S.Wrapper>
      <CommonLayout title="В ЧОМУ ВАША ВИГОДА?">
        <S.Title>
          <div>ЗАВДЯКИ УЧАСТІ В ФОРУМІ</div>{" "}
          <div>
            ВИ <HighlightText>ОТРИМАЄТЕ:</HighlightText>
          </div>
        </S.Title>
        <S.ListWrapper>
          <S.List>
            {OPTIONS.map((text) => (
              <S.ListTextWrapper>
                <S.Circle />
                <S.ListText>{text}</S.ListText>
              </S.ListTextWrapper>
            ))}
          </S.List>
        </S.ListWrapper>
      </CommonLayout>
    </S.Wrapper>
  );
};

export default BenefitForYou;
