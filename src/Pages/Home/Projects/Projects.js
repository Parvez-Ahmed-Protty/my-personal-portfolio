import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="my-5 text-white">
      <h2 className="text-white">
        My <span className="text-color">Projects</span>
      </h2>
      <Container className="mt-5">
        <Row>
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
