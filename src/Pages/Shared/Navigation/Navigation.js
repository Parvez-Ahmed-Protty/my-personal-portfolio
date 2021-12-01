import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <Nav.Link as={Link} className="text-white hover" to="/home">
        <div className="icon-bg p-3">
          <FaHome className="fs-4" />
        </div>
      </Nav.Link>
      <Nav.Link as={Link} className="text-white" to="/about">
        <div className="icon-bg p-3">
          <FaUserAlt className="fs-5" />
        </div>
      </Nav.Link>
      <Nav.Link as={Link} className="text-white" to="/contact">
        <div className="icon-bg p-3">
          <MdEmail className="fs-4" />
        </div>
      </Nav.Link>
    </div>
  );
};

export default Navigation;
