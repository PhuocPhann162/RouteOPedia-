import React from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate  = useNavigate();

  return (
    <div>
      ProductList{" "}
      <button
        className="btn btn-success btn-sm"
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product{" "}
      </button>{" "}
      &nbsp;
    </div>
  );
}

export default ProductList;
