import { Download, Github, Linkedin } from 'lucide-react';
import Reveal from '../Reveal';
import * as S from '../../styles/appStyles';

function Resume({ profile, certifications }) {
  const githubUrl = profile.socialLinks.find((link) => link.label === 'GitHub')?.href;
  const linkedinUrl = profile.socialLinks.find((link) => link.label === 'LinkedIn')?.href;

  return (
    <Reveal as={S.Section} id="resume">
      <S.ResumePanel>
        <S.ResumeContent>
          <S.Eyebrow>Resume</S.Eyebrow>
          <S.SectionTitle>Resume, GitHub, and training highlights in one quick-review area.</S.SectionTitle>
          <S.SectionDescription>
            Review my resume alongside the project repositories that demonstrate Python, SQL, Azure, dbt, Airflow,
            Docker, Power BI, and ML application skills.
          </S.SectionDescription>

          <S.ActionRow>
            <S.PrimaryButton as="a" href={profile.resumeHref} download>
              <Download size={18} />
              Download Resume
            </S.PrimaryButton>
            <S.SecondaryButton as="a" href={githubUrl} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </S.SecondaryButton>
            <S.SecondaryButton as="a" href={linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </S.SecondaryButton>
          </S.ActionRow>
        </S.ResumeContent>

        <S.CertificationMiniList aria-label="Training highlights">
          {certifications.map((certification) => (
            <S.CertificationMiniItem key={certification.title}>
              <span>{certification.issuer}</span>
              <strong>{certification.title}</strong>
            </S.CertificationMiniItem>
          ))}
        </S.CertificationMiniList>
      </S.ResumePanel>
    </Reveal>
  );
}

export default Resume;
