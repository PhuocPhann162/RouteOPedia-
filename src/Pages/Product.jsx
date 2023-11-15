import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

function Product() {
  const navigate = useNavigate();
  const [gotoProduct, setGoToProduct] = useState(() => {
    return false;
  });
  return (
    <div>
      Product &nbsp;
      <button
        className="btn btn-success btn-sm"
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product{" "}
      </button>{" "}
      &nbsp;
      <Link to="/product/details/5">
        <button className="btn btn-danger btn-sm">
          Navigate to Product Detail - 5{" "}
        </button>
      </Link>
      {gotoProduct && <Navigate to="/product/details/3" />} &nbsp;
      <button
        className="btn btn-success btn-sm"
        onClick={() => {
          setGoToProduct({gotoProduct: true});
        }}
      >
        Navigate to Product -3 (UseState)
      </button>{" "}
      &nbsp;
    </div>
  );
}

export default Product;

