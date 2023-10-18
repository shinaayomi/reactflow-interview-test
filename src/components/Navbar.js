import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link aria-details="first" to="/">
        First flow task
      </Link>
      <Link aria-details="first" to="/second">
        Second flow task
      </Link>
    </nav>
  );
}
