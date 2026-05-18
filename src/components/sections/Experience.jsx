import Reveal from '../Reveal';
import * as S from '../../styles/appStyles';

function Experience({ experience }) {
  return (
    <Reveal as={S.Section} id="experience">
      <S.SectionHeader>
        <S.Eyebrow>Experience</S.Eyebrow>
        <S.SectionTitle>Hands-on training across Azure data engineering, machine learning, and systems fundamentals.</S.SectionTitle>
        <S.SectionDescription>
          The experience section is written to make role fit clear for Azure Data Engineer Intern, Junior Data Engineer,
          and BI/Data Analyst opportunities.
        </S.SectionDescription>
      </S.SectionHeader>

      <S.Timeline>
        {experience.map((entry, index) => (
          <Reveal key={`${entry.period}-${entry.role}`} delay={index * 90}>
            <S.TimelineItem>
              <S.TimelineMarker />
              <S.TimelineMeta>
                <S.TimelinePeriod>{entry.period}</S.TimelinePeriod>
                <S.TimelineContext>{entry.context}</S.TimelineContext>
              </S.TimelineMeta>
              <S.TimelineContent>
                <S.TimelineRole>{entry.role}</S.TimelineRole>
                <S.TimelineSummary>{entry.summary}</S.TimelineSummary>
                <S.SignalList>
                  {entry.wins.map((win) => (
                    <S.SignalItem key={win}>{win}</S.SignalItem>
                  ))}
                </S.SignalList>
              </S.TimelineContent>
            </S.TimelineItem>
          </Reveal>
        ))}
      </S.Timeline>
    </Reveal>
  );
}

export default Experience;
