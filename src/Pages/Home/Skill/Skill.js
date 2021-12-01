import React from "react";
import { Col, ProgressBar } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Skill = ({ skill }) => {
  const { name, progress } = skill;
  return (
    <Col sm={12} md={4} className="my-3">
      <div className="d-flex justify-content-between">
        <Fade left>
          <h5 className="text-white text-start">{name}</h5>
        </Fade>
        <Fade left>
          <p className="text-white">{progress}%</p>
        </Fade>
      </div>
      <ProgressBar
        striped
        variant="warning"
        className="rounded-pill"
        animated
        now={progress}
      />
    </Col>
  );
};

export default Skill;
