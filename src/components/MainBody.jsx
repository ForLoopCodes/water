import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MainBody() {
  return (
    <Router>
      <div className="mainbody">
        <nav>
          <ul>
            <li>
              <Link to="/water">Home</Link>
            </li>
            <li>
              <Link to="/water/product-page-555">Product</Link>
            </li>
            <li>
              <Link to="/water/product-details-9999">Product Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/product-page-555" element={<Product />} />

          <Route path="/product-details-9999" element={<ProductDetail />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const currentPathName = window.location.href;
  return <h2>{currentPathName}</h2>;
}

function Product() {
  const currentPathName = window.location.href;
  return <h2>{currentPathName}</h2>;
}

function ProductDetail() {
  const currentPathName = window.location.href;
  return <h2>{currentPathName}</h2>;
}
