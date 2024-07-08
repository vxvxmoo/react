import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">🏠</Link>
      <Link to="/videos">📹</Link>
    </nav>
  );
}
