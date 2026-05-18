import Reveal from '../Reveal';
import ProjectCard from '../ProjectCard';
import * as S from '../../styles/appStyles';

function Projects({ projects, onPreview }) {
  return (
    <Reveal as={S.Section} id="projects">
      <S.SectionHeader>
        <S.Eyebrow>Projects</S.Eyebrow>
        <S.SectionTitle>Project-focused proof of data engineering, warehousing, SQL analytics, and ML delivery.</S.SectionTitle>
        <S.SectionDescription>
          These projects are ordered for recruiter review, starting with the most product-like application and then
          moving through pipelines, warehouses, analytics SQL, and IoT simulation work.
        </S.SectionDescription>
      </S.SectionHeader>

      <S.ProjectGrid>
        {projects.map((project, index) => (
          <Reveal as={S.ProjectGridItem} key={project.title} delay={index * 90} $featured={project.featured}>
            <ProjectCard project={project} onPreview={() => onPreview(index)} />
          </Reveal>
        ))}
      </S.ProjectGrid>
    </Reveal>
  );
}

export default Projects;
