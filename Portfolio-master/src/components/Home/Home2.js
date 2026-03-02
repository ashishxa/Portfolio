import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Ashish Kumar from Jalandhar, Punjab, a React Developer Trainee at O7 Service IT Company and a student at I.K. Gujral Punjab Technical University. I'm passionate about building web applications and exploring new technologies.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, C++, JavaScript, HTML, CSS, React.js, and Firebase{" "}
                </b>
              </i>
              — I enjoy building full-stack web applications and crafting intuitive user experiences.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Job Seeker Platforms, and React-based Solutions{" "}
                </b>
              </i>
              and exploring new technologies to build practical digital solutions.
              <br />
              <br />
              I have participated in hackathons including
              <b className="purple"> NextQuantum 2.0 (GGI Khanna) and Hack-N-Win 3.0 (CGC Mohali) </b> 
              (2025) and developed projects like <i>
                <b className="purple">QuickHire</b>
              </i>, a job seeker application.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
