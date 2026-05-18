import { CheckCircle2, ExternalLink, Eye, Github } from 'lucide-react';
import * as S from '../styles/appStyles';

function ProjectCard({ project, onPreview }) {
  return (
    <S.ProjectCard $featured={project.featured}>
      <S.ProjectImageWrap $featured={project.featured}>
        <S.ProjectImage
          src={project.image}
          alt={project.imageAlt}
          loading="eager"
          $featured={project.featured}
        />
        <S.ProjectBadge>{project.category}</S.ProjectBadge>
      </S.ProjectImageWrap>

      <S.ProjectBody>
        <S.ProjectTitle>{project.title}</S.ProjectTitle>
        <S.ProjectSummary>{project.summary}</S.ProjectSummary>
        <S.ProjectOutcome>{project.outcome}</S.ProjectOutcome>

        <S.ProjectTags aria-label={`${project.title} technology stack`}>
          {project.stack.map((technology) => (
            <S.ProjectTag key={technology}>{technology}</S.ProjectTag>
          ))}
        </S.ProjectTags>

        <S.ProjectHighlights>
          {project.highlights.map((highlight) => (
            <S.ProjectHighlight key={highlight}>
              <CheckCircle2 size={16} />
              <span>{highlight}</span>
            </S.ProjectHighlight>
          ))}
        </S.ProjectHighlights>

        <S.ProjectActions>
          <S.ProjectActionButton type="button" onClick={onPreview}>
            <Eye size={16} />
            Preview
          </S.ProjectActionButton>
          <S.ProjectActionLink href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </S.ProjectActionLink>
          {project.demoUrl ? (
            <S.ProjectActionLink href={project.demoUrl} target="_blank" rel="noreferrer" $primary>
              <ExternalLink size={16} />
              Live Demo
            </S.ProjectActionLink>
          ) : null}
        </S.ProjectActions>
      </S.ProjectBody>
    </S.ProjectCard>
  );
}

export default ProjectCard;
