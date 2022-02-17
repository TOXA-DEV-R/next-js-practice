/** @format */

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div>
      <Head>
        <title>Not found page</title>
      </Head>
      <h1>Not found page</h1>
      <h1 style={{ display: "flex" }}>
        Back to
        <Link href="/">Menu</Link>
      </h1>
    </div>
  );
};

export default NotFound;
