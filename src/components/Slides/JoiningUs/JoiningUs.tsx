import * as S from "./styles";
import CommonLayout from "components/Layout/CommonLayout";

import Facebook from "assets/facebook.png";
import QRFacebook from "assets/qrFacebook.png";

import Instagram from "assets/instagram.png";
import QRInstagram from "assets/qrInstagram.png";

const OPTIONS = [
  "Придбати квиток і особисто порекомендувати відвідати Форум своїм друзям",
  "Повідомити нам про бізнеси, які на Вашу думку є інноваційними і нам варто про них розповісти",
  "Повірити в майбутнє України і зробити все можливе для руху нашої держави вперед",
  "Стати волонетром заходу і допомогти зробити івент ще кращим",
  "Підписатися на наші соціальні сторінки, поширювати дописи і коментувати",
];

export const JoiningUs = () => {
  return (
    <S.Wrapper>
      <CommonLayout title="Як кожен може долучитися?">
        <S.ToggleItemWrapper>
          {OPTIONS.map((option) => {
            return <div>- {option}</div>;
          })}
          <S.SocialsWrapper>
            <S.Column>
              <S.SocialImage src={Facebook} />
              <S.SocialCode src={QRFacebook} />
            </S.Column>
            <S.Column>
              <S.SocialImage src={Instagram} />
              <S.SocialCode src={QRInstagram} />
            </S.Column>
          </S.SocialsWrapper>
        </S.ToggleItemWrapper>
      </CommonLayout>
    </S.Wrapper>
  );
};

export default JoiningUs;
