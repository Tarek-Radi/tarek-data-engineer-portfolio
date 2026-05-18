import Reveal from '../Reveal';
import * as S from '../../styles/appStyles';

function About({ profile, highlights }) {
  return (
    <Reveal as={S.Section} id="about">
      <S.SectionHeader>
        <S.Eyebrow>About</S.Eyebrow>
        <S.SectionTitle>Clean data systems for analytics, reporting, and practical ML use cases.</S.SectionTitle>
        <S.SectionDescription>
          I am focused on junior and intern-level Azure Data Engineering roles where strong SQL, Python, modeling,
          orchestration, and practical delivery matter.
        </S.SectionDescription>
      </S.SectionHeader>

      <S.AboutGrid>
        <S.AboutCopy>
          <S.SectionBody>{profile.about}</S.SectionBody>
          <S.SectionBody>
            My work is project-first: I build pipelines, warehouses, and applications that show clear business value,
            readable engineering decisions, and outputs that recruiters and technical reviewers can quickly inspect.
          </S.SectionBody>
        </S.AboutCopy>

        <S.HighlightPanel>
          {highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 90}>
              <S.HighlightCard>
                <S.HighlightTitle>{highlight.title}</S.HighlightTitle>
                <S.HighlightText>{highlight.description}</S.HighlightText>
              </S.HighlightCard>
            </Reveal>
          ))}
        </S.HighlightPanel>
      </S.AboutGrid>
    </Reveal>
  );
}

export default About;
