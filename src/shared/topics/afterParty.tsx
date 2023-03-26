import IvanNavi from "assets/people/IvanNavi.png";
import Shumei from "assets/people/Shumei.png";

import * as S from "components/Slides/AfterParty/styles";

export const AFTER_PARTY = {
  "виступи зірок": [
    {
      title: () => <S.EventTitle>IVAN NAVI</S.EventTitle>,
      photo: IvanNavi,
    },
    {
      title: () => <S.EventTitle>SHUMEI</S.EventTitle>,
      photo: Shumei,
    },
  ],
};
