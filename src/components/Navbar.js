import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link aria-details="first" to="/">
        Tab 1
      </Link>
      <Link aria-details="first" to="/second">
        Tab 2
      </Link>
    </nav>
  );
}
