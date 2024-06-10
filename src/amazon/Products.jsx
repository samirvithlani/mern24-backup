import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <ul>
        <li>
            <Link to ="/products/ele" className="nav-link">Eletronics</Link>
        </li>
        <li>
            <Link to ="/fashion" className="nav-link">Fashion</Link>
        </li>
      </ul>
    </div>
  );
};
