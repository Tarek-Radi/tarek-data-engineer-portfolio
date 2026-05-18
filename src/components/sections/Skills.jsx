import { BarChart3, Cloud, Database, Sparkles, Workflow } from 'lucide-react';
import Reveal from '../Reveal';
import SkillBadge from '../SkillBadge';
import * as S from '../../styles/appStyles';

const iconMap = {
  BarChart3,
  Cloud,
  Database,
  Sparkles,
  Workflow,
};

function Skills({ skills }) {
  return (
    <Reveal as={S.Section} id="skills">
      <S.SectionHeader>
        <S.Eyebrow>Skills</S.Eyebrow>
        <S.SectionTitle>Recruiter-friendly skill groups aligned with Azure data engineering roles.</S.SectionTitle>
        <S.SectionDescription>
          The stack is organized around the work I want to do: ingesting data, transforming it reliably, modeling it
          for analytics, and shipping outputs through BI tools or practical ML applications.
        </S.SectionDescription>
      </S.SectionHeader>

      <S.CardGrid $columns="repeat(2, minmax(0, 1fr))">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Sparkles;

          return (
            <Reveal key={skill.title} delay={index * 70}>
              <S.SkillCard>
                <S.SkillCardHeader>
                  <S.SkillIconWrap>
                    <Icon size={20} />
                  </S.SkillIconWrap>
                  <S.SkillTitle>{skill.title}</S.SkillTitle>
                </S.SkillCardHeader>
                <S.SkillBadgeGrid>
                  {skill.items.map((item) => (
                    <SkillBadge key={item}>{item}</SkillBadge>
                  ))}
                </S.SkillBadgeGrid>
              </S.SkillCard>
            </Reveal>
          );
        })}
      </S.CardGrid>
    </Reveal>
  );
}

export default Skills;
