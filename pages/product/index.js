/** @format */

import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div>
      <h2>
        <Link href={`/product/${1}`}>Product 1</Link>
      </h2>
      <h2>
        <Link href={`/product/${2}`}>Product 2</Link>
      </h2>
      <h2>
        <Link href={`/product/${3}`}>Product 3</Link>
      </h2>
    </div>
  );
};

export default ProductList;
