import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link aria-details="first" to="/">
        Task 1
      </Link>
      <Link aria-details="first" to="/second">
        Task 2
      </Link>
    </nav>
  );
}
