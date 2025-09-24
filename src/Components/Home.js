import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // import navigation
import patricia from "../assets/patricia.jpg"; // replace with your image

const Home = () => {
  const navigate = useNavigate(); // hook for navigation

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a0f29, #1b1f3a)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Profile Image */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img
              src={patricia}
              alt="Profile"
              style={{
                maxWidth: "300px",
                borderRadius: "50%",
                boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.5)",
                border: "5px solid #00d4ff",
              }}
            />
          </Col>

          {/* Text Content */}
          <Col md={7} className="text-center text-md-start">
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "2.5rem",
                marginBottom: "15px",
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#00d4ff" }}>Nowomugisha Patricia</span>
            </h1>

            <h3 style={{ color: "#00d4ff", marginBottom: "20px" }}>
              Software Engineer
            </h3>

            <p
              style={{
                color: "#cccccc",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "30px",
              }}
            >
              I craft clean and efficient software with a focus on performance
              and delightful user experiences.
            </p>

            <div>
              <Button
                style={{
                  backgroundColor: "#00d4ff",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  marginRight: "15px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                }}
                size="lg"
                onClick={() => navigate("/projects")} // go to Projects
              >
                View Projects
              </Button>

              <Button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "2px solid white",
                }}
                size="lg"
                onClick={() => navigate("/contact")} // go to Contact
              >
                Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
