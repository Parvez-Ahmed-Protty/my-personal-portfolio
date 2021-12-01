import React from "react";
import Banner from "../Banner/Banner";
import ContactHome from "../ContactHome/ContactHome";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <ContactHome></ContactHome>
    </div>
  );
};

export default Home;
