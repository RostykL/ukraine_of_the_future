import STEPAN_KUYBIDA from "assets/stepan_kuybida.png";
import OlegDenysenko from "assets/people/OlegDenysenko.png";
import KUSTceramics from "assets/KUSTceramics.png";

import * as S from "components/Slides/ExhibitionZone/styles";

export const EXHIBITION_ZONE = {
  виставка: [
    {
      description:
        "український художник, що здобув світове визнання. Винахідник нового виду мистецтва - гесографії",
      title: () => <S.EventTitle>Олег Денисенко</S.EventTitle>,
      photo: OlegDenysenko,
    },
    {
      description:
        "Виставка бренду креативної кераміки, основна місія якого – надихати й мотивувати на творчий підхід до життя",
      title: () => <S.EventTitle>KUSTceramics</S.EventTitle>,
      photo: KUSTceramics,
    },
    {
      description:
        "скульптор по дереву за фахом, художник та музикант. Автор інтерактивної  інсталяції 'BINDU' (Svitlo galery), учасник міжнародних та всеукраїнських виставок, арт-фестивалів",
      title: () => <S.EventTitle>Олекса Мельник</S.EventTitle>,
      photo: STEPAN_KUYBIDA,
    },
  ],
};
