// src/components/Navbar.jsx - Navbar remains unchanged
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>  Reddit Analytics</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/analytics" style={styles.link}>Analytics</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", background: "#181818", color: "white" },
  link: { marginLeft: "15px", textDecoration: "none", color: "#4da6ff", fontSize: "16px", fontWeight: "bold" }
};

export default Navbar;
