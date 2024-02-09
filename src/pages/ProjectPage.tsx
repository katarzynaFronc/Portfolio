import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../api/db.json";

export interface ProjectProps {
  id: number;
  name: string;
  webside: string;
  code: string;
  description: string;
}

export const ProjectPage = () => {
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
    <>
      <h3>{project.name}</h3>
      <div style={{ height: "100px" }}>
        <img src="" alt=""></img>
      </div>
      <a>
        <p style={{ fontSize: "12px", fontFamily: "Montserrat" }}>{project.webside}</p>
      </a>
      <a>
        <p style={{ fontSize: "12px", fontFamily: "Montserrat" }}>{project.code}</p>
      </a>
      <p style={{ fontSize: "12px", fontFamily: "Montserrat" }}>{project.description}</p>
    </>
  );
};
