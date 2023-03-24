import * as S from "./styles";
import CommonLayout from "components/Layout/CommonLayout";
import EventItem from "components/EventItem";
import { EventItemProps } from "components/EventItem/EventItem";

interface EventsLayoutProps {
  sectionTitle: string;
  sections: Record<string, EventItemProps[]>;
  title: string;
  topics: string[];
}

const EventsLayout = ({
  sectionTitle,
  sections,
  title,
  topics,
}: EventsLayoutProps) => {
  return (
    <S.Wrapper>
      <CommonLayout title={title}>
        {topics.map((topic) => (
          <S.TopicsWrapper>
            <S.TopicHeader>
              <S.HeaderTopTitle>{sectionTitle}</S.HeaderTopTitle>
              <S.TopicTitleWrapper>
                <S.TopicTitle>{topic}</S.TopicTitle>
                <div className="line" />
              </S.TopicTitleWrapper>
            </S.TopicHeader>
            <S.TopicsList>
              {sections[topic].map((section) => (
                <EventItem {...section} />
              ))}
            </S.TopicsList>
          </S.TopicsWrapper>
        ))}
      </CommonLayout>
    </S.Wrapper>
  );
};

export default EventsLayout;
