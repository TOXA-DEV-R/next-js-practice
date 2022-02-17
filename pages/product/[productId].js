/** @format */

import { useRouter } from "next/router";
import React from "react";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h2>Details about Product {productId}</h2>;
};

export default ProductDetail;
