import PrismaComp from "@/components/PrismaComp";
import Users from "@/components/Users";
import { trpcServer } from "./_trpc/trpcServerClient";


export default async function Home() {
  const users = await trpcServer.users.getUsers();
  return (
    <main>
      T3 APP
      {/* <PrismaComp/> */}
      <h2>Data Fetching using TRPC & Prisma (Server only)</h2>
      <div>Data fetching will be passed to client components to display and will not be printed in server components.</div>
      <Users initialUsers={users}/>
    </main>
  );
}
