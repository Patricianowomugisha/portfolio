import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import p from "../assets/p.jpg"; // about photo

const About = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#0b0620",
        color: "white",
        minHeight: "100vh",
        padding: "60px 40px",
      }}
    >
      <Row className="align-items-center">
        {/* Left Column - Text */}
        <Col md={6} style={{ borderRight: "2px solid white", paddingRight: "30px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
            ABOUT ME
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            I’m Nowomugisha Patricia, a passionate Software Engineer dedicated to
            building clean, efficient and impactful digital solutions.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            With a strong foundation in problem-solving and a keen eye for detail,
            I enjoy transforming ideas into functional, user-friendly applications.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            My work blends creativity and technical precision and am constantly
            learning new tools and technologies to stay ahead in the ever-evolving
            tech landscape.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Whether its crafting sleek user interfaces or developing robust backend
            systems, I strive to create software that not only works flawlessly but
            also delivers exceptional user experience.
          </p>
        </Col>

        {/* Right Column - Image */}
        <Col
          md={6}
          style={{ display: "flex", justifyContent: "center", paddingLeft: "30px" }}
        >
          <img
            src={p}
            alt="Nowomugisha Patricia"
            style={{
              maxWidth: "90%",
              height: "400px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
