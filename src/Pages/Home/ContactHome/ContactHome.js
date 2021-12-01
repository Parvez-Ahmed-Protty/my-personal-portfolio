import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import { MdCall, MdEmail, MdLocalLibrary } from "react-icons/md";
import Fade from "react-reveal/Fade";

const ContactHome = () => {
  return (
    <div className="bg-color my-5">
      <h2 className="text-white">
        Get <span className="text-color">In Touch</span>
      </h2>
      <Container className="mt-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12} md={5} className="text-white text-start px-5">
            <Fade left>
              <h3>DON'T BE SHY !</h3>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="d-flex">
                <MdLocalLibrary className="fs-1 me-3 text-color" />
                <div>
                  <h6>Address Point</h6>
                  <p>
                    123 Stree New York City , United States Of America 750065.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <MdEmail className="fs-3 me-3 text-color" />
                <div>
                  <h6>Email</h6>
                  <p>parvezahmedprottoy@gmail.com</p>
                </div>
              </div>
              <div className="d-flex">
                <MdCall className="fs-3 me-3 text-color" />
                <div>
                  <h6>Call</h6>
                  <p>01708013921</p>
                </div>
              </div>
            </Fade>
          </Col>
          <Col sm={12} md={7}>
            <Fade right>
              <form
                action="https://formsubmit.co/parvezahmedprottoy@gmail.com"
                method="POST"
                enctype="text/plain"
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3 "
                >
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Email"
                  className="mb-3 "
                >
                  <Form.Control type="email" placeholder="Enter Your Name" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Subject"
                  className="mb-3 "
                >
                  <Form.Control type="text" placeholder="Your Subject" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Massage"
                  className="mb-3 "
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a massage here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <input type="hidden" name="_captcha" value="false" />
                <div className="text-start">
                  <Button
                    type="submit"
                    variant="outline-warning py-2 px-3 text-white rounded-pill"
                  >
                    Send Massage <FiSend className="ms-1 text-color" />
                  </Button>
                </div>
              </form>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactHome;
