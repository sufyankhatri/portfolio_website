import { projects } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import ProjectCard from "./ProjectCard";
import { GridContainer } from "./ProjectsStyles";

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return <ProjectCard p={p} />;
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
