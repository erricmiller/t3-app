import { trpcServer } from "@/app/_trpc/trpcServerClient";
import Users from "./Users";

const UsersData = async () => {
  const users = await trpcServer.users.getUsers();
  return (
    <div>
      <h2>Data Fetching using TRPC & Prisma (Server only)</h2>
      <div>
        Data fetching will be passed to client components to display and will
        not be printed in server components.
      </div>
      <br />
      <div>{JSON.stringify(users)}</div>
      <Users/>

    </div>
  );
};

export default UsersData;
