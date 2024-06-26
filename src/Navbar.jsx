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
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>

          <li class="nav-item active">
            <Link to="/formdemo1" className="nav-link">
              formdemo1
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/formdemo2" className="nav-link">
              formdemo2
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/formdemo3" className="nav-link">
              formdemo3
            </Link>
          </li>

          <li class="nav-item active">
            <Link to="/useeffectdemo" className="nav-link">
              useeffectdemo
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/apidemo1" className="nav-link">
              api demo 1
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/apidemo2" className="nav-link">
              api demo 2
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/apidemo3" className="nav-link">
              api demo 3
            </Link>
          </li>
          <li class="nav-item active">
            <Link to="/apidemo4" className="nav-link">
              api demo 4
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
