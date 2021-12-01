import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiCloudDownload } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section bg-color d-flex align-items-center justify-content-center">
      <Container fluid className="">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={5}>
            <Fade left>
              <div className="img-bg">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/yh0Kpqd/parvej.png"
                  alt=""
                />
              </div>
            </Fade>
          </Col>
          <Col sm={11} md={6}>
            <Fade right>
              <h1 className="text-color text-size fw-bold">
                I'M Parvez Ahmed.
              </h1>
            </Fade>

            <h1 className="text-white text-size fw-normal">
              <Typewriter
                options={{
                  strings: ["Junior Web Developer", "Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <Fade right>
              <p className="text-white">
                I am a Junior Web Developer. I have worked on multiple Junior
                Web Developer projects. I devote my full attention to designing
                and building websites. I constantly learn.
              </p>
            </Fade>
            <a
              href="https://drive.google.com/file/d/1Bf5IVVXqCE2bMUPnflkKmPV08ltxXaGF/view?usp=sharing"
              download="Resume"
            >
              <Button variant="outline-warning py-2 px-3 text-white rounded-pill">
                Download Resume <BiCloudDownload className="ms-1 text-color" />
              </Button>
            </a>
          </Col>
          <Col sm={12} md={1}>
            <Navigation></Navigation>
          </Col>
        </Row>
      </Container>
      {/*  */}
    </div>
  );
};

export default Banner;
