import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home{" "}
            </a>
          </li>
          <li class="nav-item active">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
