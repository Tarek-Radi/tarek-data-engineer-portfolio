import { Cloud, Database, Download, Github, Linkedin, Workflow } from 'lucide-react';
import Reveal from '../Reveal';
import * as S from '../../styles/appStyles';

function Hero({ profile }) {
  const githubUrl = profile.socialLinks.find((link) => link.label === 'GitHub')?.href;
  const linkedinUrl = profile.socialLinks.find((link) => link.label === 'LinkedIn')?.href;

  return (
    <S.HeroSection id="hero">
      <S.HeroLayout>
        <Reveal>
          <S.HeroContent>
            <S.ProfileRow>
              <S.ProfileImage src="/images/tarek.png" alt={profile.fullName} />
              <S.ProfileText>
                <h2>{profile.fullName}</h2>
                <span>{profile.availability}</span>
              </S.ProfileText>
            </S.ProfileRow>

            <S.Eyebrow>Portfolio for Azure and Data Engineering roles</S.Eyebrow>
            <S.HeroTitle>{profile.role}</S.HeroTitle>
            <S.HeroDescription>{profile.headline}</S.HeroDescription>

            <S.TagRow aria-label="Core tools and focus areas">
              {profile.heroFocus.map((item) => (
                <S.Tag key={item}>{item}</S.Tag>
              ))}
            </S.TagRow>

            <S.ActionRow>
              <S.PrimaryButton as="a" href="#projects">
                View Projects
                <S.ArrowIcon size={18} />
              </S.PrimaryButton>
              <S.SecondaryButton as="a" href={profile.resumeHref} download>
                <Download size={18} />
                Download Resume
              </S.SecondaryButton>
              <S.SecondaryButton as="a" href={githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </S.SecondaryButton>
              <S.SecondaryButton as="a" href={linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </S.SecondaryButton>
            </S.ActionRow>

            <S.StatsGrid>
              {profile.heroStats.map((stat) => (
                <S.StatCard key={stat.label}>
                  <S.StatTitle>{stat.title}</S.StatTitle>
                  <S.StatLabel>{stat.label}</S.StatLabel>
                  <S.StatDescription>{stat.detail}</S.StatDescription>
                </S.StatCard>
              ))}
            </S.StatsGrid>
          </S.HeroContent>
        </Reveal>

        <Reveal delay={120}>
          <S.HeroVisual>
            <S.VisualPanel>
              <S.VisualHeader>
                <S.VisualEyebrow>Data Engineering Workflow</S.VisualEyebrow>
                <S.VisualTitle>From messy source data to trusted analytics outputs</S.VisualTitle>
              </S.VisualHeader>

              <S.VisualPipeline>
                <S.PipelineStage>
                  <S.StageLabel>Ingest</S.StageLabel>
                  <S.StageTitle>Files, SQL sources, and telemetry</S.StageTitle>
                  <S.StageDescription>
                    Raw CSVs, operational databases, e-commerce data, and JSONL sensor streams prepared for processing.
                  </S.StageDescription>
                </S.PipelineStage>
                <S.PipelineConnector />
                <S.PipelineStage>
                  <S.StageLabel>Transform</S.StageLabel>
                  <S.StageTitle>Python, dbt, Airflow, ADF, Databricks</S.StageTitle>
                  <S.StageDescription>
                    Cleaned, tested, modeled, and orchestrated transformations with reusable engineering patterns.
                  </S.StageDescription>
                </S.PipelineStage>
                <S.PipelineConnector />
                <S.PipelineStage>
                  <S.StageLabel>Serve</S.StageLabel>
                  <S.StageTitle>Warehouses, marts, BI, and ML apps</S.StageTitle>
                  <S.StageDescription>
                    Analytics-ready star schemas, KPI models, Power BI datasets, and product-like Streamlit applications.
                  </S.StageDescription>
                </S.PipelineStage>
              </S.VisualPipeline>

              <S.VisualFooter>
                <S.VisualMiniCard>
                  <Cloud size={18} />
                  <span>Azure-ready workflows</span>
                </S.VisualMiniCard>
                <S.VisualMiniCard>
                  <Workflow size={18} />
                  <span>Orchestrated pipelines</span>
                </S.VisualMiniCard>
                <S.VisualMiniCard>
                  <Database size={18} />
                  <span>Warehouse models</span>
                </S.VisualMiniCard>
              </S.VisualFooter>
            </S.VisualPanel>
          </S.HeroVisual>
        </Reveal>
      </S.HeroLayout>
    </S.HeroSection>
  );
}

export default Hero;
