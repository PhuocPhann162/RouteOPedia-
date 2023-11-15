import React from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  
  return (
    <div>
      CreateProduct {" "}
      <button
        className="btn btn-success btn-sm"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back{" "}
      </button>{" "}
    </div>
  );
}

export default CreateProduct;
