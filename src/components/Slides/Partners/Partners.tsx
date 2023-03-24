import * as S from "./styles";

import Emily from "assets/svg/emily-logo.svg";
import Unbroken from "assets/unbroken.png";
import Kormil from "assets/partners/kormil.png";
import Ribas from "assets/partners/ribas.png";
import Grand from "assets/partners/grand.png";
import SpaceDome from "assets/partners/spaceDome.png";
import Svarga from "assets/partners/svarga.png";
import Core from "assets/partners/core.png";
import Lightdruk from "assets/partners/lightdruk.png";
import Wa from "assets/partners/wa.png";
import Hospital from "assets/partners/hospital.png";
import Startup from "assets/partners/startup.png";
import Skovoroda from "assets/partners/skovoroda.png";
import Kontramarka from "assets/svg/kontramarka-logo.svg";
import { ANCHORS } from "../../../shared/ANCHORS";

const PARTNERS = [
  Emily,
  Kormil,
  Unbroken,
  Ribas,
  Grand,
  SpaceDome,
  Svarga,
  Core,
  Lightdruk,
  Wa,
  Hospital,
  Startup,
  Skovoroda,
  Kontramarka,
];

const Partners = () => {
  return (
    <S.Wrapper id={ANCHORS.PARTNERS}>
      <S.Header>Партнери</S.Header>
      <S.Partners>
        {PARTNERS.map((partner) => (
          <img src={partner} />
        ))}
      </S.Partners>
    </S.Wrapper>
  );
};

export default Partners;
