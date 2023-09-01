"use client";
import { trpc } from "@/app/_trpc/client";
import { trpcServer } from "@/app/_trpc/trpcServerClient";
import React, { useState } from "react";


const Users = () => {


  // for client sdie fetching
  const clientUsers = trpc.users.getUsers.useQuery();
  const isUserAuthentecated = trpc.users.isUserAuthentecated.useQuery();

  const [content, setContent] = useState({
    name: "Asad",
    email: "asad@gmail.com",
    password: "123456789",
    gender: "Male",
  });
  const addUser = trpc.users.addUser.useMutation({
    onSettled: () => {
      clientUsers.refetch();
    },
  });
  return (
    <div>
      <h2>Data Fetching using TRPC & Prisma (client only)</h2>
      <div>{JSON.stringify(clientUsers.data)}</div>
      <h2>Add Data using TRPC & Prisma (client only)</h2>
      <button
        onClick={async () => {
          if (content.length != 0) {
            addUser.mutate(content);
            setContent("");
          }
          else{
            console.log("Could not Add User")
          }
        }}
      >
        Add User
      </button>
      <h2>Data Fetching using API (client only)</h2>
      <div>Server Session : {
            isUserAuthentecated ? (<p>{JSON.stringify(isUserAuthentecated.data)}</p>) : (<p>Not Found</p>)
}</div>
    </div>
  );
};

export default Users;
