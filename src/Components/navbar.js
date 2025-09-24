import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#0b0620",
        padding: "15px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid white",
      }}
    >
      {/* Left side - Name */}
      <div style={{ color: "white", fontSize: "0.9rem" }}>
        Nowomugisha Patricia
      </div>

      {/* Right side - Links */}
      <div style={{ display: "flex", gap: "30px" }}>
        {["/", "/about", "/skills", "/projects", "/contact"].map((path, index) => {
          const labels = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];
          return (
            <NavLink
              key={path}
              to={path}
              end
              style={({ isActive }) => ({
                position: "relative",
                color: isActive ? "#5bc0de" : "white",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "0.95rem",
                paddingBottom: "5px",
              })}
              className={({ isActive }) =>
                isActive ? "active-link" : undefined
              }
            >
              {labels[index]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
