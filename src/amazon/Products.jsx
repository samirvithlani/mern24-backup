import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <ul>
        <li>
          <Link to="/products/ele" className="nav-link">
            Eletronics
          </Link>
        </li>
        <li>
          <Link to="/fashion" className="nav-link">
            Fashion
          </Link>
        </li>
      </ul>
      <ul>
        Product LIST
        <li>
          <Link to="/products/detail/101" className="nav-link">
            PRODUCT 1
          </Link>
        </li>
        <li>
          <Link to="/products/detail/102" className="nav-link">
            PRODUCT 2
          </Link>
        </li>
        <li>
          <Link to="/products/detail/adjkbfjksdnldkmndskl" className="nav-link">
            PRODUCT 3
          </Link>
        </li>
      </ul>
    </div>
  );
};
