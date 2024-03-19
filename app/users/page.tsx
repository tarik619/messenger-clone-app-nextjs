"use client";

import { signOut } from "next-auth/react";

const Users = () => {
  return (
    <button className="" onClick={() => signOut()}>
      logout
    </button>
  );
};

export default Users;
