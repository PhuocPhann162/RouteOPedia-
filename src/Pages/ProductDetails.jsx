import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      Product Details
      <p>Product Id: {productId}</p>
    </div>
  )
}

export default ProductDetails