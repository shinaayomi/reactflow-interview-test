import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link aria-details="first" to="/">
        First flow
      </Link>
      <Link aria-details="first" to="/second">
        Second flow
      </Link>
      <Link aria-details="first" to="/third">
        Third flow
      </Link>
    </nav>
  );
}
