"use client";
import { trpc } from "@/app/_trpc/client";
import { trpcServer } from "@/app/_trpc/trpcServerClient";
import React, { useState } from "react";


const Users = ({initialUsers}:{initialUsers: Awaited<ReturnType<(typeof trpcServer.users)["getUsers"]>>}) => {
  const getUsers = trpc.users.getUsers.useQuery(undefined,{
    initialData:initialUsers,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
//   const getUsers = trpc.users.getUsers.useQuery();

  const [content, setContent] = useState({
    name: "Asad",
    email: "asad@gmail.com",
    password: "123456789",
    gender: "Male",
  });
  const addUser = trpc.users.addUser.useMutation({
    onSettled: () => {
        getUsers.refetch();
    },
  });
  return (
    <div>
      <h2>Data Fetching using TRPC & Prisma (client only)</h2>
      <div>{JSON.stringify(getUsers.data)}</div>
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
    </div>
  );
};

export default Users;
