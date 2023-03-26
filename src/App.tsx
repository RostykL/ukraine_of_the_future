import React from "react";
import * as S from "./styles";
import Preview from "components/Slides/Preview";
import Layout from "components/Layout";
import Auction from "components/Slides/Auction";
import Lectors from "components/Slides/Lectors";
import Exhibition from "components/Slides/Exhibition";
import ExhibitionZone from "components/Slides/ExhibitionZone";
import AfterParty from "components/Slides/AfterParty";
import VideoProject from "components/Slides/VideoProject";
import BenefitForYou from "components/Slides/BenefitForYou";
import JoiningUs from "components/Slides/JoiningUs";
import Contacts from "components/Slides/Contacts";
import Partners from "components/Slides/Partners";

function App() {
  return (
    <S.Wrapper>
      <Layout>
        <Preview />
        <Auction />
        <Lectors />
        <Exhibition />
        <ExhibitionZone />
        <AfterParty />
        <VideoProject />
        <BenefitForYou />
        <JoiningUs />
        <Contacts />
        <Partners />
      </Layout>
    </S.Wrapper>
  );
}

export default App;
