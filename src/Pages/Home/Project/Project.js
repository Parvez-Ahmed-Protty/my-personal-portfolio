import React, { useState } from "react";
import { Button, Card, Carousel, Col, Nav } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import Zoom from "react-reveal/Zoom";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./Project.css";

const Project = ({ project }) => {
  const { name, img_1, img_2, img_3, liveWibsite, cliendCode } = project;
  const [modalShow, setModalShow] = useState(false);
  return (
    <Col sm={12} md={4} lg={4}>
      <Zoom left>
        <Card className="text-center card bg-dark mb-4">
          {/*  */}
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img_1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img_2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img_3} alt="" />
            </Carousel.Item>
          </Carousel>
          <span className="border border-bottom border-warning  border-3"></span>
          {/*  */}
          <Card.Body>
            <Card.Header>
              <h4 className="text-color">{name}</h4>
            </Card.Header>
            <div className="d-flex justify-content-between">
              <Nav.Link
                className="text-white"
                target="_blank"
                href={liveWibsite}
              >
                <div className="">
                  <AiOutlineGlobal className="fs-4 me-2 text-color" />
                  <p>Live Website</p>
                </div>
              </Nav.Link>
              <Nav.Link
                className="text-white"
                target="_blank"
                href={cliendCode}
              >
                <div className="">
                  <AiOutlineGithub className="fs-4 me-2 text-color" />
                  <p>Cliend Code</p>
                </div>
              </Nav.Link>
            </div>
            <Button
              onClick={() => setModalShow(true)}
              variant="outline-warning py-2 px-3 text-white rounded-pill w-75"
            >
              View Details <FiArrowUpRight className="ms-1 text-color" />
            </Button>
          </Card.Body>
        </Card>
      </Zoom>
      {/*  */}
      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={project}
      ></ProjectModal>
      {/*  */}
    </Col>
  );
};

export default Project;
