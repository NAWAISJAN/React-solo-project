import React from "react";
import logo from "./logo192.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" />
        <ul className="nav-item">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
