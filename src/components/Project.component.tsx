import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../api/db.json";
import { CustomButton } from "./CustomButton.component";

export interface ProjectProps {
  id: number;
  image?: string;
  name: string;
  webside: string;
  code: string;
  description: string;
}

export const Project = () => {
  const { id } = useParams();
  const [, setSelectedProject] = useState<ProjectProps | undefined>();
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const projectId = Number(id);
    const project = projects.find((proj) => proj.id === projectId);

    if (project) {
      setSelectedProject(project);
    }
    setIsLoading(false);
  }, [id]);

  const location = useLocation();
  const { project } = location.state || {};

  return (
    <div className="project-container">
      <h3 className="project-name">{project.name}</h3>
      <div className="project-image-container">{project.image && <img src={project.image} alt={project.name} className="project-image" />}</div>
      <div className="project-link-container">
        <a href={project.webside} className="project-link" target="_blank">
          <CustomButton>Go to App</CustomButton>
        </a>
        <a href={project.code} className="project-link" target="_blank">
          <CustomButton>Go to code</CustomButton>
        </a>
      </div>
      <p className="project-description">{project.description}</p>
    </div>
  );
};
