/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1 className="h1">Header</h1>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/product/">Product</Link>
        </li>
      </ul>
      <style jsx>
        {`
          .h1 {
            font-size: 20px;
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
