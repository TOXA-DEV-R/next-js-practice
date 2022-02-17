/** @format */

import React from "react";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    paths: users.map((user) => ({
      params: {
        userId: user.id.toString(),
      },
    })),
    fallback: false,
  };
}

const User = ({ user }) => {
  return (
    <div>
      <h1>{user.id}</h1>
      <p>{user.username}</p>
      <h3>{user.email}</h3>
    </div>
  );
};

export default User;
