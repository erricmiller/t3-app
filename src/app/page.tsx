import UsersData from "@/components/UsersData";
import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import React from "react";

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main>
      T3 APP
      <div>
        {session ? (
          <div>
            <p>Hello, {JSON.stringify(session)}</p>
            <UsersData />
          </div>
        ) : (
          <h2>Please login to view Users data</h2>
        )}
      </div>
      {/* <PrismaComp/> */}
    </main>
  );
};

export default Home;
