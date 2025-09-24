





// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import travelling from "../assets/travelling.png";
// import graphics from "../assets/graphics.jpg";
// import portfolio from "../assets/portfolio.jpg";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Tourism & Travel Website",
//       description:
//         "A travel website with a booking system where users can browse destinations and make reservations.",
//       image: travelling,
//       link: "https://www.your-travel-site.com",
//     },
//     {
//       title: "Graphic Design Projects",
//       description:
//         "A collection of creative flyers and posters designed for different clients and events.",
//       image: graphics,
//       link: "https://drive.google.com/your-folder-link",
//     },
//     {
//       title: "Personal Portfolio",
//       description:
//         "My personal portfolio showcasing my software projects, skills, and contact information.",
//       image: portfolio,
//       link: "https://your-portfolio-link.com",
//     },
//   ];

//   return (
//     <section
//       style={{
//         background: "linear-gradient(135deg, #0a0f29, #1b1f3a)",
//         minHeight: "100vh",
//         padding: "60px 20px",
//         color: "white",
//       }}
//     >
//       <Container>
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "40px",
//             fontSize: "2.5rem",
//             fontWeight: "bold",
//             color: "#00d4ff",
//           }}
//         >
//           My Projects
//         </h2>

//         <Row>
//           {projects.map((project, index) => (
//             <Col key={index} md={4} className="mb-4">
//               <Card
//                 style={{
//                   backgroundColor: "#1b1f3a",
//                   border: "none",
//                   borderRadius: "15px",
//                   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
//                   overflow: "hidden",
//                   height: "100%",
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 }}
//                 className="project-card"
//               >
//                 <Card.Img
//                   variant="top"
//                   src={project.image}
//                   style={{
//                     height: "200px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Card.Body>
//                   <Card.Title style={{ color: "#00d4ff" }}>
//                     {project.title}
//                   </Card.Title>
//                   <Card.Text style={{ color: "#cccccc" }}>
//                     {project.description}
//                   </Card.Text>
//                   <Button
//                     style={{
//                       backgroundColor: "#00d4ff",
//                       color: "#000",
//                       border: "none",
//                       fontWeight: "bold",
//                       borderRadius: "8px",
//                     }}
//                     href={project.link}
//                     target="_blank"
//                   >
//                     View More
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Extra CSS for hover effect */}
//       <style>
//         {`
//           .project-card:hover {
//             transform: translateY(-10px) scale(1.02);
//             box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.7);
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Projects;





import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import travelling from "../assets/travelling.png";
import graphics from "../assets/graphics.jpg";
import portfolio from "../assets/portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Tourism & Travel Website",
      description:
        "A travel website with a booking system where users can browse destinations and make reservations.",
      image: travelling,
      link: "https://www.your-travel-site.com",
    },
    {
      title: "Graphic Design Projects",
      description:
        "A collection of creative flyers and posters designed for different clients and events.",
      image: graphics,
      link: "https://drive.google.com/your-folder-link",
    },
    {
      title: "Personal Portfolio",
      description:
        "My personal portfolio showcasing my software projects, skills, and contact information.",
      image: portfolio,
      link: "https://your-portfolio-link.com",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a0f29, #1b1f3a)",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "white",
      }}
    >
      <Container>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#00d4ff",
          }}
        >
          My Projects
        </h2>

        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card
                style={{
                  backgroundColor: "#1b1f3a",
                  border: "none",
                  borderRadius: "15px",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
                  overflow: "hidden",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="project-card"
              >
                <div className="card-img-wrapper">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="card-img-zoom"
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{ color: "#00d4ff" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#cccccc" }}>
                    {project.description}
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "#00d4ff",
                      color: "#000",
                      border: "none",
                      fontWeight: "bold",
                      borderRadius: "8px",
                    }}
                    href={project.link}
                    target="_blank"
                  >
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Extra CSS for hover effects */}
      <style>
        {`
          .project-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.7);
          }

          .card-img-wrapper {
            overflow: hidden;
            height: 200px;
          }

          .card-img-zoom {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .project-card:hover .card-img-zoom {
            transform: scale(1.1);
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
