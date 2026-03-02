import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="QuickHire"
              description="A job seeker application built with React.js and Firebase. This platform allows job seekers to search, apply, and track job opportunities. Features include real-time job listings, application tracking, and user profile management. Built during hackathons with modern web technologies."
              ghLink="https://github.com/ashishxa/quickhire"
              demoLink="https://quickhire-demo.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal Portfolio"
              description="A responsive portfolio website built with React.js, showcasing skills, projects, and experience. Features include smooth scrolling, dynamic content, and responsive design that works across all devices."
              ghLink="https://github.com/ashishxa/portfolio"
              demoLink="https://ashish-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Projects"
              description="Collection of Python and C++ projects built during my coursework and hackathons. Includes problem-solving algorithms, data structure implementations from NextQuantum 2.0, Hack-N-Win 3.0, and various coding challenges."
              ghLink="https://github.com/ashishxa"
              demoLink="https://github.com/ashishxa"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
