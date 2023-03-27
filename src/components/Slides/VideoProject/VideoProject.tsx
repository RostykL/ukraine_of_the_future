import * as S from "./styles";

import CommonLayout from "components/Layout/CommonLayout";

import VideoProjectPhoto from "assets/video-project.png";
import VideoProjectCamera from "assets/camera.png";
import HighlightText from "components/HighlightText";
import Circles from "components/Circles";
import { ANCHORS } from "shared/ANCHORS";

const VideoProject = () => {
  return (
    <S.Wrapper id={ANCHORS.VIDEO_PROJECT}>
      <CommonLayout title="ВІДЕОПРОЕКТ">
        <S.ContentWrapper>
          <Circles styles={{ left: "-600px", top: "400px" }} />
          <S.Photo src={VideoProjectPhoto} />
          <S.Text>
            <div>
              Метою <HighlightText>відеопроекту</HighlightText> є
              продемонструвати якомога більшій аудиторії, що Україна - це сильна
              держава, яка розвивається та має значний потенціал для швидкого
              економічного зростання. Проект прагне надихнути українців,
              незалежно від того, де вони проживають, вірити в перспективне
              майбутнє нашої держави. За допомогою серії відеоісторій проект
              набуде більшого поширення
            </div>
          </S.Text>
        </S.ContentWrapper>
        <S.VideoProjectInspiration>
          НАТХНЕННЯ ТА МОТИВАЦІЯ
        </S.VideoProjectInspiration>
        <S.VideoProjectWrapper>
          <S.VideoProjectDescription>
            <div className="title">
              Топові <HighlightText>спікери</HighlightText> з різних галузей
              розкажуть:
            </div>
            <ul className="list">
              <li className="listItem">
                <S.Circle />
                <div>
                  <HighlightText>Чому</HighlightText> вони вірять в Україну та
                  що, на їх думку, чекає нашу країну у найближчі роки
                </div>
              </li>
              <li className="listItem">
                <S.Circle />
                <div>
                  <HighlightText>Який</HighlightText> потенціал є в України для
                  наукових досліджень та інновацій
                </div>
              </li>
              <li className="listItem">
                <S.Circle />
                <div>
                  <HighlightText>Як</HighlightText> впровадження "розумних"
                  технологій у містобудуванні та транспортній інфраструктурі
                  поліпшить якість життя громадян
                </div>
              </li>
              <li className="listItem">
                <S.Circle />
                <div>
                  <HighlightText>Де</HighlightText> молодим бізнесменам шукати
                  підтримки задля втілення у життя стартапів та інноваційних
                  ідей
                </div>
              </li>
            </ul>
            <div className="welcomeInvitation">
              Запрошуємо усіх до обговорення
            </div>
          </S.VideoProjectDescription>
          <S.Photo src={VideoProjectCamera} />
        </S.VideoProjectWrapper>
      </CommonLayout>
    </S.Wrapper>
  );
};

export default VideoProject;
