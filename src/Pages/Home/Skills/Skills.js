import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Skill from "../Skill/Skill";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skill.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="my-5">
      <div>
        <h2 className="text-white">
          My <span className="text-color">Skills</span>
        </h2>
        <Container className="mt-4">
          <Row>
            {skills.map((skill) => (
              <Skill skill={skill}></Skill>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
