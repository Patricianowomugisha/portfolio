// import React from "react";
// import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
// import { FaCode, FaTools, FaPaintBrush, FaUsers, FaLightbulb, FaClock, FaComments } from "react-icons/fa";

// const Skills = () => {
//   return (
//     <div style={{ backgroundColor: "#0b0620", minHeight: "100vh", padding: "50px 0" }}>
//       <Container>
//         <h2 className="text-center mb-5 text-white">My Skills</h2>

//         {/* Technical Skills */}
//         <Row className="mb-5">
//           <Col>
//             <h4 className="mb-3 text-white">Technical Skills</h4>
//             <Row>
//               <Col md={6} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white">
//                   <Card.Body>
//                     <FaCode size={30} className="mb-2 text-primary" />
//                     <Card.Title>Languages</Card.Title>
//                     <ListGroup variant="flush" className="bg-dark text-white">
//                       <ListGroup.Item className="bg-dark text-white border-0">Python</ListGroup.Item>
//                       <ListGroup.Item className="bg-dark text-white border-0">JavaScript</ListGroup.Item>
//                       <ListGroup.Item className="bg-dark text-white border-0">Java</ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={6} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white">
//                   <Card.Body>
//                     <FaTools size={30} className="mb-2 text-success" />
//                     <Card.Title>Frameworks & Libraries</Card.Title>
//                     <ListGroup variant="flush" className="bg-dark text-white">
//                       <ListGroup.Item className="bg-dark text-white border-0">React</ListGroup.Item>
//                       <ListGroup.Item className="bg-dark text-white border-0">Node.js</ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={6} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white">
//                   <Card.Body>
//                     <FaTools size={30} className="mb-2 text-warning" />
//                     <Card.Title>Tools</Card.Title>
//                     <ListGroup variant="flush" className="bg-dark text-white">
//                       <ListGroup.Item className="bg-dark text-white border-0">Git</ListGroup.Item>
//                       <ListGroup.Item className="bg-dark text-white border-0">Figma</ListGroup.Item>
//                       <ListGroup.Item className="bg-dark text-white border-0">VS Code</ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               <Col md={6} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white">
//                   <Card.Body>
//                     <FaPaintBrush size={30} className="mb-2 text-danger" />
//                     <Card.Title>Graphic Designing</Card.Title>
//                     <ListGroup variant="flush" className="bg-dark text-white">
//                       <ListGroup.Item className="bg-dark text-white border-0">Adobe Illustrator</ListGroup.Item>
//                       <ListGroup.Item className="bg-dark text-white border-0">Photoshop</ListGroup.Item>
//                     </ListGroup>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Col>
//         </Row>

//         {/* Soft Skills */}
//         <Row>
//           <Col>
//             <h4 className="mb-3 text-white">Soft Skills</h4>
//             <Row>
//               <Col md={4} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white text-center">
//                   <Card.Body>
//                     <FaComments size={30} className="mb-2 text-info" />
//                     <Card.Title>Communication</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={4} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white text-center">
//                   <Card.Body>
//                     <FaUsers size={30} className="mb-2 text-primary" />
//                     <Card.Title>Teamwork</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={4} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white text-center">
//                   <Card.Body>
//                     <FaLightbulb size={30} className="mb-2 text-warning" />
//                     <Card.Title>Problem Solving</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={4} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white text-center">
//                   <Card.Body>
//                     <FaUsers size={30} className="mb-2 text-success" />
//                     <Card.Title>Leadership</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col md={4} className="mb-3">
//                 <Card className="h-100 shadow-sm border-0 bg-dark text-white text-center">
//                   <Card.Body>
//                     <FaClock size={30} className="mb-2 text-danger" />
//                     <Card.Title>Time Management</Card.Title>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Skills;





import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaCode, FaTools, FaPaintBrush, FaUsers, FaLightbulb, FaClock, FaComments } from "react-icons/fa";

// Reusable SkillCard component with hover effect
const SkillCard = ({ children, className = "" }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className={`h-100 shadow-sm border-0 bg-dark text-white ${className}`}
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hover ? "translateY(-5px) scale(1.03)" : "none",
        boxShadow: hover ? "0px 8px 20px rgba(255, 255, 255, 0.15)" : "none",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Card>
  );
};

const Skills = () => {
  return (
    <div style={{ backgroundColor: "#0b0620", minHeight: "100vh", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: "white" }}>My Skills</h2>

        {/* Technical Skills */}
        <Row className="mb-5">
          <Col>
            <h4 className="mb-3" style={{ color: "white" }}>Technical Skills</h4>
            <Row>
              <Col md={6} className="mb-3">
                <SkillCard>
                  <Card.Body>
                    <FaCode size={30} className="mb-2 text-primary" />
                    <Card.Title>Languages</Card.Title>
                    <ListGroup variant="flush" className="bg-dark text-white">
                      <ListGroup.Item className="bg-dark text-white border-0">Python</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">JavaScript</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">Java</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">React</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </SkillCard>
              </Col>

              <Col md={6} className="mb-3">
                <SkillCard>
                  <Card.Body>
                    <FaTools size={30} className="mb-2 text-success" />
                    <Card.Title>Frameworks & Libraries</Card.Title>
                    <ListGroup variant="flush" className="bg-dark text-white">
                      <ListGroup.Item className="bg-dark text-white border-0">React</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">Node.js</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </SkillCard>
              </Col>

              <Col md={6} className="mb-3">
                <SkillCard>
                  <Card.Body>
                    <FaTools size={30} className="mb-2 text-warning" />
                    <Card.Title>Tools</Card.Title>
                    <ListGroup variant="flush" className="bg-dark text-white">
                      <ListGroup.Item className="bg-dark text-white border-0">Git</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">Figma</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">VS Code</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </SkillCard>
              </Col>

              <Col md={6} className="mb-3">
                <SkillCard>
                  <Card.Body>
                    <FaPaintBrush size={30} className="mb-2 text-danger" />
                    <Card.Title>Graphic Designing</Card.Title>
                    <ListGroup variant="flush" className="bg-dark text-white">
                      <ListGroup.Item className="bg-dark text-white border-0">Adobe Illustrator</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">Photoshop</ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-white border-0">Canva</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </SkillCard>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Soft Skills */}
        <Row>
          <Col>
            <h4 className="mb-3" style={{ color: "white" }}>Soft Skills</h4>
            <Row>
              <Col md={4} className="mb-3">
                <SkillCard className="text-center">
                  <Card.Body>
                    <FaComments size={30} className="mb-2 text-info" />
                    <Card.Title>Communication</Card.Title>
                  </Card.Body>
                </SkillCard>
              </Col>
              <Col md={4} className="mb-3">
                <SkillCard className="text-center">
                  <Card.Body>
                    <FaUsers size={30} className="mb-2 text-primary" />
                    <Card.Title>Teamwork</Card.Title>
                  </Card.Body>
                </SkillCard>
              </Col>
              <Col md={4} className="mb-3">
                <SkillCard className="text-center">
                  <Card.Body>
                    <FaLightbulb size={30} className="mb-2 text-warning" />
                    <Card.Title>Problem Solving</Card.Title>
                  </Card.Body>
                </SkillCard>
              </Col>
              <Col md={4} className="mb-3">
                <SkillCard className="text-center">
                  <Card.Body>
                    <FaUsers size={30} className="mb-2 text-success" />
                    <Card.Title>Leadership</Card.Title>
                  </Card.Body>
                </SkillCard>
              </Col>
              <Col md={4} className="mb-3">
                <SkillCard className="text-center">
                  <Card.Body>
                    <FaClock size={30} className="mb-2 text-danger" />
                    <Card.Title>Time Management</Card.Title>
                  </Card.Body>
                </SkillCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
