import React from "react";
import { Carousel, Col, Container, Modal, Nav, Row } from "react-bootstrap";
import { AiFillCode, AiOutlineCloudServer } from "react-icons/ai";

const ProjectModal = (props) => {
  const {
    name,
    img_1,
    img_2,
    img_3,
    dec_1,
    dec_2,
    dec_3,
    cliendCode,
    serverCode,
  } = props.project;
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="bg-dark">
          <Container className="py-5 ">
            <Row className="d-flex align-items-center">
              <Col sm={12} md={6}>
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
              </Col>
              <Col sm={12} md={6}>
                <Modal.Header closeButton>
                  <Modal.Title
                    className="text-center text-color"
                    id="contained-modal-title-vcenter"
                  >
                    {name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-white">
                  <h5>Decription</h5>
                  <li>{dec_1}</li>
                  <li>{dec_2}</li>
                  <li>{dec_3}</li>
                </Modal.Body>
                <div className="d-flex justify-content-between">
                  <Nav.Link
                    className="text-white"
                    target="_blank"
                    href={cliendCode}
                  >
                    <div className="d-flex">
                      <AiFillCode className="fs-4 me-2 text-color" />
                      <p>Cliend Code</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    target="_blank"
                    href={serverCode}
                  >
                    <div className="d-flex">
                      <AiOutlineCloudServer className="fs-4 me-2 text-color" />
                      <p>Server Code</p>
                    </div>
                  </Nav.Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectModal;
