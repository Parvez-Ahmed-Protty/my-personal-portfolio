import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiCloudDownload } from "react-icons/bi";
import Navigation from "../../Shared/Navigation/Navigation";

const About = () => {
  return (
    <div className="bg-color banner-section">
      <div className="contact-title">
        <h1 className="text-color text-size mb-5">ABOUT ME</h1>
      </div>
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={6} className="text-white text-start px-5">
            <h3 className="mb-4">PERSONAL INFOS</h3>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className="text-secondary">First Name:</p>
                <p className="ms-2">Parvez Ahmed</p>
              </div>
              <div className="d-flex">
                <p className="text-secondary ">Last Name:</p>
                <p className="ms-2">Prottoy</p>
              </div>
            </div>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <p className="text-secondary">Age:</p>
                <p className="ms-2">20 Years</p>
              </div>
              <div className="d-flex">
                <p className="text-secondary">Nationality</p>
                <p className="ms-2">Bangladesh</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className="text-secondary">Phone:</p>
                <p className="ms-2">01708013921</p>
              </div>
              <div className="d-flex ">
                <p className="text-secondary">Email:</p>
                <p className="ms-2">parvezahmedprottoy@gmail.com</p>
              </div>
            </div>
            <Button variant="outline-warning py-2 px-3 text-white rounded-pill">
              Download Resume <BiCloudDownload className="ms-1 text-color" />
            </Button>
          </Col>
          <Col sm={12} md={5}>
            <img
              className="img-fluid rounded"
              src="https://i.ibb.co/p3k0HhK/about.gif"
              alt=""
            />
          </Col>
          <Col sm={12} md={1}>
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
