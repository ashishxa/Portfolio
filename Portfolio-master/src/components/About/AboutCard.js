import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Ashish Kumar</span>{" "}
            from <span className="purple">Jalandhar, Punjab</span>.
            <br />
            I'm currently a{" "}
            <span className="purple">React Developer Trainee</span> at{" "}
            <span className="purple">O7 Service IT Company</span>.
            <br />I'm a student at <span className="purple">I.K. Gujral Punjab Technical University</span> pursuing my degree while building real-world projects.
            <br />
            <br />
            My experience includes:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building web applications with React.js and Firebase
            </li>
            <li className="about-activity">
              <ImPointRight /> Hackathon participation - NextQuantum 2.0 (GGI Khanna), Hack-N-Win 3.0 (CGC Mohali) (2025)
            </li>
            <li className="about-activity">
              <ImPointRight /> Developed QuickHire - a job seeker application
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashish Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
