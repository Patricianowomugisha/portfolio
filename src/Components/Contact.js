// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import shott from "../assets/shott.jpg"; // <-- replace with your actual image import

// const Contact = () => {
//   const [hovered, setHovered] = useState(null);

//   const iconStyle = (color) => ({
//     fontSize: "2rem",
//     margin: "0 15px",
//     cursor: "pointer",
//     color: hovered === color ? color : "white",
//     transition: "color 0.3s ease, transform 0.3s ease",
//     transform: hovered === color ? "scale(1.2)" : "scale(1)",
//   });

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${shott})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {/* Dark overlay (lighter now) */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0,0,0,0.4)", // less dark
//           backdropFilter: "blur(1.5px)", // lighter blur
//         }}
//       />

//       {/* Content */}
//       <Container
//         style={{
//           position: "relative",
//           zIndex: 2,
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Contact Info</h2>
//         <p style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
//           <strong>Tel:</strong> 0770343407
//         </p>
//         <p style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
//           <strong>Email:</strong> patriciakarekezi@gmail.com
//         </p>
//         <p style={{ marginTop: "20px", fontSize: "1.1rem" }}>
//           Patricia Karekezi
//         </p>

//         {/* White line before icons */}
//         <div
//           style={{
//             width: "50px",
//             height: "2px",
//             backgroundColor: "white",
//             margin: "20px auto",
//           }}
//         />

//         {/* Social Icons */}
//         <div>
//           <FaFacebook
//             style={iconStyle("dodgerblue")}
//             onMouseEnter={() => setHovered("dodgerblue")}
//             onMouseLeave={() => setHovered(null)}
//           />
//           <FaXTwitter
//             style={iconStyle("white")}
//             onMouseEnter={() => setHovered("white")}
//             onMouseLeave={() => setHovered(null)}
//           />
//           <FaInstagram
//             style={iconStyle("deeppink")}
//             onMouseEnter={() => setHovered("deeppink")}
//             onMouseLeave={() => setHovered(null)}
//           />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Contact;







import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  const iconButtonStyle = (color) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "0 12px",
    cursor: "pointer",
    backgroundColor: hovered === color ? "white" : "transparent",
    border: "2px solid white",
    transition: "all 0.3s ease",
    transform: hovered === color ? "scale(1.2)" : "scale(1)",
    color: hovered === color ? color : "white",
    fontSize: "1.5rem",
  });

  return (
    <div
      style={{
        backgroundColor: "#0B0C2A", // dark blue background
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Contact Info</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
          <strong>Tel:</strong> 0770343407
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
          <strong>Email:</strong> patriciakarekyezi@gmail.com
        </p>
        <p style={{ marginTop: "20px", fontSize: "1.1rem" }}>Patricia Karekezi</p>

        {/* White line before icons */}
        <div
          style={{
            width: "50px",
            height: "2px",
            backgroundColor: "white",
            margin: "20px auto",
          }}
        />

        {/* Social Icons inside circular buttons */}
        <div>
          <span
            style={iconButtonStyle("dodgerblue")}
            onMouseEnter={() => setHovered("dodgerblue")}
            onMouseLeave={() => setHovered(null)}
          >
            <FaFacebook />
          </span>
          <span
            style={iconButtonStyle("white")}
            onMouseEnter={() => setHovered("white")}
            onMouseLeave={() => setHovered(null)}
          >
            <FaXTwitter />
          </span>
          <span
            style={iconButtonStyle("deeppink")}
            onMouseEnter={() => setHovered("deeppink")}
            onMouseLeave={() => setHovered(null)}
          >
            <FaInstagram />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
