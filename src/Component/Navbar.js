import React from "react";
import logo from "./logo192.png";

export default function navbar() {
  return (
    <nav>
      <img src={logo} className="nav-img" />
      <h3 className="nav-h3">ReactFacts</h3>
      <h4 className="nav-h4">React Course - project</h4>
    </nav>
  );
}
