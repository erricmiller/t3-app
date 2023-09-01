import React from 'react'
import PrismaComp from "@/components/PrismaComp";
import UsersData from "@/components/UsersData";
import { authOptions } from '@/server/auth'
import getServerSession from "next-auth"

const Home = async() =>  {

  const session = await getServerSession(authOptions)

  console.log("session:-------------------------" ,session)

  return (
    <main>
      T3 APP
      
      <div>
        {session? (
          <h2>Hello, {JSON.stringify(session)}</h2>
          //  <UsersData/>
        ) : (
          <h2>Please login to view Users data</h2>
        ) }
      </div>
      {/* <PrismaComp/> */}
    </main>
  );
}


export default Home